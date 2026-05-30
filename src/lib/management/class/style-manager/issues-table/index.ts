export class IssuesTableStyleManager {
	static getContainerClass(): string {
		return 'c-issues-table overflow-hidden rounded-2xl bg-[var(--color-background-primary)]';
	}

	static getToolbarClass(): string {
		return 'flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)]/55 px-4 py-3';
	}

	static getToolbarMetaClass(): string {
		return 'text-sm text-[var(--color-text-secondary)]';
	}

	static getActionsClass(): string {
		return 'flex flex-wrap items-center gap-2';
	}

	static getTableWrapClass(): string {
		return 'overflow-x-auto';
	}

	static getTableClass(): string {
		return 'min-w-full border-collapse';
	}

	static getHeadRowClass(): string {
		return 'bg-[var(--color-background-secondary)]/38';
	}

	static getHeadCellClass(): string {
		return 'border-b border-[var(--color-border-primary)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]';
	}

	static getBodyRowClass(selected: boolean): string {
		return selected
			? 'bg-[color:color-mix(in_srgb,var(--color-primary-500)_8%,var(--color-background-primary))]'
			: 'bg-[var(--color-background-primary)]';
	}

	static getBodyCellClass(): string {
		return 'border-b border-[var(--color-border-primary)] px-4 py-3 align-top text-sm text-[var(--color-text-primary)]';
	}

	static getMutedTextClass(): string {
		return 'text-xs text-[var(--color-text-secondary)]';
	}

	static getMessageTextClass(): string {
		return 'max-w-[34rem] whitespace-pre-wrap leading-6 text-[var(--color-text-primary)]';
	}

	static getCheckboxClass(): string {
		return 'h-4 w-4 rounded border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] accent-[var(--color-primary-600)]';
	}
}
