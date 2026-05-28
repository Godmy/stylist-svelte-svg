type PreviewMode = 'file' | 'markdown' | 'story' | 'json-tree';
type StoryModule = { default: unknown };
type BacklogSaveMode = 'append' | 'replace';

interface BacklogDialogOptions {
	title?: string;
	placeholder?: string;
	draft?: string;
	saveMode?: BacklogSaveMode;
}

interface DomainFile {
	name: string;
	path: string;
}

interface DomainEntity {
	name: string;
	path: string;
	files: DomainFile[];
}

interface DomainJoint {
	name: string;
	entities: DomainEntity[];
}

interface DomainCluster {
	name: string;
	joints: DomainJoint[];
}

interface DomainTreeNode {
	name: string;
	clusters: DomainCluster[];
}

interface DomainPageInput {
	tree: DomainTreeNode[];
	storyModules: Record<string, () => Promise<StoryModule>>;
}

interface SearchDomainEntry {
	id: string;
	domain: string;
	cluster: string;
	joint: string;
	family: string;
	entityPath: string;
	filePath: string;
	searchText: string;
}

export function createDomainPageState(input: DomainPageInput) {
	const { tree, storyModules } = input;

	let activeDomain = $state(tree[0]?.name ?? '');
	let activeCluster = $state('');
	let activeJoint = $state('');
	let activeEntityPath = $state('');
	let activeFilePath = $state('');
	let fileContent = $state('');
	let fileError = $state('');
	let fileLoading = $state(false);
	let previewMode = $state<PreviewMode>('file');
	let storyPreviewComponent = $state<unknown>(null);
	let storyPreviewLoading = $state(false);
	let storyPreviewError = $state('');
	let backlogDialogOpen = $state(false);
	let backlogDialogTitle = $state('Backlog note');
	let backlogDialogPlaceholder = $state('');
	let backlogDraft = $state('');
	let backlogLoading = $state(false);
	let backlogSaving = $state(false);
	let backlogError = $state('');
	let backlogSaveMode = $state<BacklogSaveMode>('append');

	const activeDomainNode = $derived(tree.find((d) => d.name === activeDomain));
	const activeClusterNode = $derived(
		activeDomainNode?.clusters.find((c) => c.name === activeCluster)
	);
	const activeJointNode = $derived(activeClusterNode?.joints.find((j) => j.name === activeJoint));
	const availableJointNames = $derived(activeClusterNode?.joints.map((j) => j.name) ?? []);
	const entities = $derived(activeJointNode?.entities ?? []);
	const activeEntity = $derived(entities.find((e) => e.path === activeEntityPath));
	const markdownFile = $derived(activeEntity?.files.find((f) => f.name === 'index.md') ?? null);
	const storyFile = $derived(
		activeEntity?.files.find((f) => f.name === 'index.story.svelte') ?? null
	);
	const activeFamily = $derived(activeEntity?.name.split('/').at(-1) ?? '');
	const activeFamilyName = $derived(activeEntity?.name ?? '');
	const breadcrumbFile = $derived(activeFilePath ? (activeFilePath.split('/').pop() ?? '') : '');
	const backlogPath = $derived(
		activeFamily ? `${activeDomain}/data/md/backlog/${activeFamily}/index.md` : ''
	);
	const storyModulePath = $derived(storyFile ? `../lib/${storyFile.path}` : null);
	const previewKind = $derived.by(() => {
		if (activeFilePath.endsWith('.svg')) return 'svg';
		if (activeFilePath.endsWith('.json')) return 'json';
		return 'text';
	});
	const searchEntries = $derived.by<SearchDomainEntry[]>(() =>
		tree.flatMap((domainNode) =>
			domainNode.clusters.flatMap((clusterNode) =>
				clusterNode.joints.flatMap((jointNode) =>
					jointNode.entities.map((entity) => ({
						id: `${domainNode.name}/${clusterNode.name}/${jointNode.name}/${entity.path}`,
						domain: domainNode.name,
						cluster: clusterNode.name,
						joint: jointNode.name,
						family: entity.name,
						entityPath: entity.path,
						filePath: entity.files[0]?.path ?? '',
						searchText: [
							domainNode.name,
							clusterNode.name,
							jointNode.name,
							entity.name,
							entity.path,
							...entity.files.map((file) => file.name),
							...entity.files.map((file) => file.path)
						]
							.join(' ')
							.toLowerCase()
					}))
				)
			)
		)
	);

	$effect(() => {
		if (!activeDomainNode) return;
		if (!activeCluster || !activeDomainNode.clusters.some((c) => c.name === activeCluster)) {
			activeCluster = activeDomainNode.clusters[0]?.name ?? '';
		}
	});

	$effect(() => {
		if (!activeClusterNode) return;
		if (!activeJoint || !activeClusterNode.joints.some((j) => j.name === activeJoint)) {
			activeJoint = activeClusterNode.joints[0]?.name ?? '';
		}
	});

	$effect(() => {
		if (entities.length === 0) {
			activeEntityPath = '';
			activeFilePath = '';
			return;
		}
		if (!activeEntityPath || !entities.some((e) => e.path === activeEntityPath)) {
			const first = entities[0];
			activeEntityPath = first.path;
			activeFilePath = first.files[0]?.path ?? '';
		}
	});

	$effect(() => {
		if (!activeEntity) return;
		if (!activeFilePath || !activeEntity.files.some((f) => f.path === activeFilePath)) {
			activeFilePath = activeEntity.files[0]?.path ?? '';
		}
	});

	$effect(() => {
		if (previewMode !== 'file' && previewMode !== 'json-tree') return;
		const path = activeFilePath;
		if (!path) {
			fileContent = '';
			fileError = '';
			fileLoading = false;
			return;
		}
		fileLoading = true;
		fileError = '';
		fetch(`/content?path=${encodeURIComponent(path)}`)
			.then(async (r) => {
				const p = await r.json();
				if (!r.ok) throw new Error(p.error ?? 'Preview failed');
				fileContent = p.content ?? '';
			})
			.catch((e: Error) => {
				fileContent = '';
				fileError = e.message;
			})
			.finally(() => {
				if (activeFilePath === path) fileLoading = false;
			});
	});

	$effect(() => {
		if (previewMode !== 'markdown') return;
		const path = markdownFile?.path ?? '';
		if (!path) {
			fileContent = '';
			fileError = 'Markdown file is not available for this entity.';
			fileLoading = false;
			return;
		}
		fileLoading = true;
		fileError = '';
		fetch(`/content?path=${encodeURIComponent(path)}`)
			.then(async (r) => {
				const p = await r.json();
				if (!r.ok) throw new Error(p.error ?? 'Preview failed');
				fileContent = p.content ?? '';
			})
			.catch((e: Error) => {
				fileContent = '';
				fileError = e.message;
			})
			.finally(() => {
				if (previewMode === 'markdown' && markdownFile?.path === path) fileLoading = false;
			});
	});

	$effect(() => {
		if (previewMode !== 'story') return;
		const modulePath = storyModulePath;
		const loadStory = modulePath ? storyModules[modulePath] : null;
		storyPreviewComponent = null;
		storyPreviewError = '';
		if (!loadStory) {
			storyPreviewLoading = false;
			storyPreviewError = 'Story playground is not available for this entity.';
			return;
		}
		storyPreviewLoading = true;
		loadStory()
			.then((m) => {
				if (storyModulePath !== modulePath || previewMode !== 'story') return;
				storyPreviewComponent = m.default ?? null;
				if (!storyPreviewComponent)
					storyPreviewError = 'Story module does not expose a default export.';
			})
			.catch((e: Error) => {
				if (storyModulePath !== modulePath || previewMode !== 'story') return;
				storyPreviewError = e.message;
			})
			.finally(() => {
				if (storyModulePath === modulePath && previewMode === 'story') storyPreviewLoading = false;
			});
	});

	function handleDomainSelect(name: string) {
		activeDomain = name;
		activeEntityPath = '';
		activeFilePath = '';
		previewMode = 'file';
	}

	function handleClusterSelect(name: string) {
		activeCluster = name;
		activeEntityPath = '';
		activeFilePath = '';
		previewMode = 'file';
	}

	function handleJointSelect(name: string) {
		activeJoint = name;
		activeEntityPath = '';
		activeFilePath = '';
		previewMode = 'file';
	}

	function handleEntitySelect(path: string) {
		const next = entities.find((e) => e.path === path);
		activeEntityPath = path;

		if (previewMode === 'markdown') {
			const md = next?.files.find((f) => f.name === 'index.md');
			if (md) {
				activeFilePath = md.path;
				return;
			}
		}
		if (previewMode === 'story') {
			const story = next?.files.find((f) => f.name === 'index.story.svelte');
			if (story) {
				activeFilePath = story.path;
				return;
			}
		}

		const currentName = activeFilePath.split('/').pop();
		const same = currentName ? next?.files.find((f) => f.name === currentName) : null;
		activeFilePath = same?.path ?? next?.files[0]?.path ?? '';
		if (!same) previewMode = 'file';
	}

	function handleFileSelect(path: string) {
		activeFilePath = path;
		previewMode = 'file';
	}

	function handleMarkdownSelect() {
		if (!markdownFile) return;
		activeFilePath = markdownFile.path;
		previewMode = 'markdown';
	}

	function handleStorySelect() {
		if (!storyFile) return;
		activeFilePath = storyFile.path;
		previewMode = 'story';
	}

	function handleJsonTreeSelect() {
		previewMode = 'json-tree';
	}

	function selectSearchEntry(entryId: string) {
		const entry = searchEntries.find((candidate) => candidate.id === entryId);
		if (!entry) return;

		activeDomain = entry.domain;
		activeCluster = entry.cluster;
		activeJoint = entry.joint;
		activeEntityPath = entry.entityPath;
		activeFilePath = entry.filePath;
		previewMode = 'file';
	}

	function createBacklogDraft(issue: string): string {
		const lines = [
			`- ${issue}`,
			`  domain: ${activeDomain || '-'}`,
			`  cluster: ${activeCluster || '-'}`,
			`  joint: ${activeJoint || '-'}`,
			`  family: ${activeFamily || '-'}`,
			`  entity: ${activeEntityPath || '-'}`,
			`  file: ${activeFilePath || '-'}`,
			'  note: '
		];

		return lines.join('\n');
	}

	async function openBacklogDialog(options?: BacklogDialogOptions) {
		if (!activeFamily) return;
		backlogDialogOpen = true;
		backlogDialogTitle = options?.title ?? 'Backlog note';
		backlogDialogPlaceholder =
			options?.placeholder ??
			'Describe the problem or missing work. This note will be saved to the family backlog on disk.';
		backlogDraft = options?.draft ?? '';
		backlogError = '';
		backlogSaveMode = options?.saveMode ?? 'append';
		backlogLoading = false;
	}

	function closeBacklogDialog() {
		backlogDialogOpen = false;
		backlogLoading = false;
		backlogSaving = false;
		backlogError = '';
	}

	async function saveBacklog() {
		if (!activeFamily) return;
		if (!backlogDraft.trim()) {
			backlogError = 'Backlog note is empty.';
			return;
		}

		backlogSaving = true;
		backlogError = '';
		try {
			const r = await fetch('/content', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					domain: activeDomain,
					family: activeFamily,
					content: backlogDraft,
					mode: backlogSaveMode
				})
			});
			const p = await r.json();
			if (!r.ok) throw new Error(p.error ?? 'Save failed');
			closeBacklogDialog();
		} catch (e) {
			backlogError = e instanceof Error ? e.message : String(e);
		} finally {
			backlogSaving = false;
		}
	}

	return {
		get activeDomain() {
			return activeDomain;
		},
		get activeCluster() {
			return activeCluster;
		},
		get activeJoint() {
			return activeJoint;
		},
		get activeEntityPath() {
			return activeEntityPath;
		},
		get activeFilePath() {
			return activeFilePath;
		},
		get fileContent() {
			return fileContent;
		},
		get fileError() {
			return fileError;
		},
		get fileLoading() {
			return fileLoading;
		},
		get previewMode() {
			return previewMode;
		},
		get storyPreviewComponent() {
			return storyPreviewComponent;
		},
		get storyPreviewLoading() {
			return storyPreviewLoading;
		},
		get storyPreviewError() {
			return storyPreviewError;
		},
		get backlogDialogOpen() {
			return backlogDialogOpen;
		},
		get backlogDialogTitle() {
			return backlogDialogTitle;
		},
		get backlogDialogPlaceholder() {
			return backlogDialogPlaceholder;
		},
		get backlogDraft() {
			return backlogDraft;
		},
		set backlogDraft(v: string) {
			backlogDraft = v;
		},
		get backlogLoading() {
			return backlogLoading;
		},
		get backlogSaving() {
			return backlogSaving;
		},
		get backlogError() {
			return backlogError;
		},
		get availableJointNames() {
			return availableJointNames;
		},
		get entities() {
			return entities;
		},
		get activeEntity() {
			return activeEntity;
		},
		get markdownFile() {
			return markdownFile;
		},
		get storyFile() {
			return storyFile;
		},
		get activeFamily() {
			return activeFamily;
		},
		get activeFamilyName() {
			return activeFamilyName;
		},
		get breadcrumbFile() {
			return breadcrumbFile;
		},
		get backlogPath() {
			return backlogPath;
		},
		get previewKind() {
			return previewKind;
		},
		get searchEntries() {
			return searchEntries;
		},
		createBacklogDraft,
		handleDomainSelect,
		handleClusterSelect,
		handleJointSelect,
		handleEntitySelect,
		handleFileSelect,
		handleMarkdownSelect,
		handleStorySelect,
		handleJsonTreeSelect,
		selectSearchEntry,
		openBacklogDialog,
		closeBacklogDialog,
		saveBacklog
	};
}
