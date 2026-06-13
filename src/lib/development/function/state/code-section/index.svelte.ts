import type { CodeSectionProps } from '$stylist/development/type/struct/code-section-props';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createCodeSectionState(props: CodeSectionProps) {
	const containerClass = $derived(
		mergeClassNames(
			'c-code-section rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm overflow-hidden',
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const headerContainerClass = $derived(
		'border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-3 text-sm font-medium text-[var(--color-text-primary)]'
	);
	const headerContentClass = $derived('flex items-center justify-between gap-3');
	const titleClass = $derived('font-semibold text-[var(--color-text-primary)]');
	const tagsContainerClass = $derived('flex flex-wrap gap-2');
	const tagClass = $derived('text-xs text-[var(--color-text-secondary)]');

	return {
		get containerClass() {
			return containerClass;
		},
		get headerContainerClass() {
			return headerContainerClass;
		},
		get headerContentClass() {
			return headerContentClass;
		},
		get titleClass() {
			return titleClass;
		},
		get tagsContainerClass() {
			return tagsContainerClass;
		},
		get tagClass() {
			return tagClass;
		}
	};
}

export default createCodeSectionState;
