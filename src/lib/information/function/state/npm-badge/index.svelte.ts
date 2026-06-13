import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { DEFAULT_BADGE_LABEL } from '$stylist/information/const/record/badge-label';
import type { RecipeNpmBadge } from '$stylist/information/interface/recipe/npm-badge';

export function createNpmBadgeState(props: RecipeNpmBadge) {
	const type = $derived(props.type ?? 'version');
	const label = $derived(
		props.label ?? DEFAULT_BADGE_LABEL[type as keyof typeof DEFAULT_BADGE_LABEL]
	);
	const classes = $derived(
		mergeClassNames(
			'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
			{
				version:
					'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] dark:bg-[var(--color-primary-900)]/30 dark:text-[var(--color-primary-300)]',
				downloads:
					'bg-[var(--color-success-100)] text-[var(--color-success-800)] dark:bg-[var(--color-success-900)]/30 dark:text-[var(--color-success-300)]',
				license:
					'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)] dark:bg-[var(--color-secondary-900)]/30 dark:text-[var(--color-secondary-300)]',
				size: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)] dark:bg-[var(--color-warning-900)]/30 dark:text-[var(--color-warning-300)]',
				custom:
					'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] dark:bg-[var(--color-neutral-700)] dark:text-[var(--color-neutral-300)]'
			}[type],
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const linkClasses = $derived('inline-flex items-center gap-1 hover:opacity-[var(--opacity-80)]');

	return {
		get type() {
			return type;
		},
		get label() {
			return label;
		},
		get classes() {
			return classes;
		},
		get linkClasses() {
			return linkClasses;
		}
	};
}

export default createNpmBadgeState;
