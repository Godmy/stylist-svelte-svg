<script lang="ts">
	import { DomainSidebar } from '$stylist/domain/component/organism/domain-sidebar';
	import DomainProperty from '$stylist/domain/component/organism/domain-property/index.svelte';
	import TaxonomyBreadcrumbs from '$stylist/domain/component/molecule/taxonomy-breadcrumbs/index.svelte';
	import JointTabButtons from '$stylist/domain/component/molecule/joint-tab-buttons/index.svelte';
	import DomainFilePreview from '$stylist/domain/component/organism/domain-file-preview/index.svelte';
	import TextInputDialog from '$stylist/input/component/organism/text-input-dialog/index.svelte';
	import { createDomainPageState } from '$stylist/domain/function/state/domain-page/index.svelte';
	import type { PageData } from './$types';

	type StoryModule = { default: unknown };

	const storyModules = import.meta.glob('../lib/**/index.story.svelte') as Record<
		string,
		() => Promise<StoryModule>
	>;

	let { data }: { data: PageData } = $props();
	const s = createDomainPageState({ tree: data.tree, storyModules });
	let isDomainVisible = $state(true);
</script>

<main class="domain-page" class:domain-hidden={!isDomainVisible}>
	{#if isDomainVisible}
		<DomainSidebar
			activeDomain={s.activeDomain}
			activeCluster={s.activeCluster}
			activeJoint={s.activeJoint}
			availableJoints={s.availableJointNames}
			entities={s.entities}
			activeEntityPath={s.activeEntityPath}
			onDomainSelect={s.handleDomainSelect}
			onClusterSelect={s.handleClusterSelect}
			onJointSelect={s.handleJointSelect}
			onEntitySelect={s.handleEntitySelect}
		/>

		<section class="content-panel" aria-label="Content viewer">
			<div class="viewer">
				<TaxonomyBreadcrumbs
					domain={s.activeDomain}
					cluster={s.activeCluster}
					joint={s.activeJoint}
					family={s.activeFamilyName}
					file={s.breadcrumbFile}
				/>

				{#if s.activeEntity}
					<JointTabButtons
						files={s.activeEntity.files}
						markdownFile={s.markdownFile}
						storyFile={s.storyFile}
						activeFilePath={s.activeFilePath}
						previewMode={s.previewMode}
						previewKind={s.previewKind}
						activeFamily={s.activeFamily}
						onFileSelect={s.handleFileSelect}
						onMarkdownSelect={s.handleMarkdownSelect}
						onStorySelect={s.handleStorySelect}
						onJsonTreeSelect={s.handleJsonTreeSelect}
						onOpenBacklog={() => void s.openBacklogDialog()}
					/>
				{/if}

				<DomainFilePreview
					previewMode={s.previewMode}
					fileContent={s.fileContent}
					fileLoading={s.fileLoading}
					fileError={s.fileError}
					storyPreviewComponent={s.storyPreviewComponent}
					storyPreviewLoading={s.storyPreviewLoading}
					storyPreviewError={s.storyPreviewError}
					previewKind={s.previewKind}
				/>
			</div>
		</section>
	{/if}

	<DomainProperty {isDomainVisible} onDomainToggle={() => (isDomainVisible = !isDomainVisible)} />
</main>

<TextInputDialog
	open={s.backlogDialogOpen}
	title="Debug backlog"
	path={s.backlogPath}
	bind:value={s.backlogDraft}
	loading={s.backlogLoading}
	saving={s.backlogSaving}
	error={s.backlogError}
	placeholder="Enter backlog text for this family..."
	onClose={s.closeBacklogDialog}
	onSave={() => void s.saveBacklog()}
/>

<style>
	.domain-page {
		position: relative;
		display: grid;
		grid-template-columns: 249px minmax(0, 1fr);
		min-height: 100vh;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}

	.domain-page.domain-hidden {
		grid-template-columns: minmax(0, 1fr);
	}

	.content-panel {
		display: grid;
		min-width: 0;
	}

	.viewer {
		display: grid;
		grid-template-rows: auto auto 1fr;
		min-height: 0;
	}

	.viewer :global(.c-taxonomy-breadcrumbs) {
		width: 400px;
	}

	.domain-page :global(.c-domain-property) {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		z-index: 10;
	}

	@media (max-width: 840px) {
		.domain-page {
			grid-template-columns: 1fr;
		}

		.domain-page :global(.c-domain-property) {
			position: sticky;
			top: 0;
			right: auto;
			justify-self: stretch;
			margin-top: auto;
		}
	}
</style>
