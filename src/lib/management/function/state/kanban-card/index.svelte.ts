import { untrack } from 'svelte';
import type { KanbanCardPriority } from '$stylist/management/type/alias/kanban-card-priority';
import type { KanbanCardStateProps } from '$stylist/management/type/alias/kanban-card-state-props';

export function createKanbanCardState(props: KanbanCardStateProps) {
	const card = $derived(
		props.card as {
			title: string;
			priority?: KanbanCardPriority;
			description?: string;
			tags?: string[];
			updatedAt?: Date | string;
			assignee?: { name?: string; avatar?: string } | string;
		}
	);
	const draggable = $derived(props.draggable ?? true);
	const selected = $derived(props.selected ?? false);
	const editable = $derived(props.editable ?? true);
	const archivable = $derived(props.archivable ?? true);
	const deletable = $derived(props.deletable ?? true);

	let isEditingTitle = $state(false);
	let draftTitle = $state(untrack(() => card.title));

	$effect(() => {
		draftTitle = card.title;
	});

	function startTitleEdit(): void {
		if (!editable) return;
		draftTitle = card.title;
		isEditingTitle = true;
	}

	function cancelTitleEdit(): void {
		draftTitle = card.title;
		isEditingTitle = false;
	}

	function commitTitleEdit(): void {
		const nextTitle = draftTitle.trim();
		if (!nextTitle) {
			draftTitle = card.title;
			isEditingTitle = false;
			return;
		}
		if (nextTitle !== card.title) {
			props.onTitleChange?.(nextTitle);
		}
		isEditingTitle = false;
	}

	function formatDate(date: Date | string): string {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	function getPriorityColor(priority: KanbanCardPriority | undefined): string {
		if (!priority) return 'default';
		return { low: 'success', medium: 'warning', high: 'danger' }[priority];
	}

	function getPriorityAccentClass(priority: KanbanCardPriority | undefined): string {
		if (!priority) return 'before:bg-[var(--color-background-tertiary)]';
		return {
			low: 'before:bg-[var(--color-success-400)]',
			medium: 'before:bg-[var(--color-warning-400)]',
			high: 'before:bg-[var(--color-danger-400)]'
		}[priority];
	}

	const containerClasses = $derived(
		`c-kanban-card group relative rounded-xl border border-[color:var(--color-border-secondary)] bg-[--color-background-primary]/95 p-4 cursor-pointer transition-all duration-[var(--duration-200)] hover:-translate-y-[1px] hover:border-[color:color-mix(in_srgb,var(--color-primary-500)_38%,var(--color-border-secondary)_62%)] hover:shadow-[0_14px_26px_-18px_color-mix(in_srgb,var(--color-info-600)_55%,transparent)] before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-full ${getPriorityAccentClass(card.priority)}`
	);

	return {
		get card() {
			return card;
		},
		get draggable() {
			return draggable;
		},
		get selected() {
			return selected;
		},
		get editable() {
			return editable;
		},
		get archivable() {
			return archivable;
		},
		get deletable() {
			return deletable;
		},
		get isEditingTitle() {
			return isEditingTitle;
		},
		get draftTitle() {
			return draftTitle;
		},
		get containerClasses() {
			return containerClasses;
		},
		startTitleEdit,
		cancelTitleEdit,
		commitTitleEdit,
		formatDate,
		getPriorityColor,
		getPriorityAccentClass
	};
}

export default createKanbanCardState;
