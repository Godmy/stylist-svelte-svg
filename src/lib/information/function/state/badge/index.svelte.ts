import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { DEFAULT_BADGE } from '$stylist/information/const/record/badge';
import type { RecipeBadge } from '$stylist/information/interface/recipe/badge';

export function createBadgeState(props: RecipeBadge) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const classes = $derived(
		mergeClassNames(
			'inline-flex items-center font-semibold rounded-full',
			{
				default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
				primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
				secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)]',
				success: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
				warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
				danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
				error: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
				info: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
				gray: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
				neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
				solid: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]',
				outline:
					'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-primary)]',
				ghost: 'bg-transparent text-[var(--color-text-primary)]',
				link: 'bg-transparent text-[var(--color-primary-600)] underline underline-offset-2',
				subtle: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)]',
				dark: 'bg-[var(--color-neutral-800)] text-[var(--color-text-inverse)]',
				light: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)]',
				elevated: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] shadow-sm',
				flat: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
			}[variant],
			{
				xs: 'text-[10px] px-1.5 py-0.5',
				sm: 'text-xs px-2 py-0.5',
				md: 'text-sm px-2.5 py-0.5',
				lg: 'text-base px-3 py-1',
				xl: 'text-lg px-3.5 py-1.5',
				'2xl': 'text-xl px-4 py-2',
				'1/4': 'text-[10px] px-1.5 py-0.5',
				'1/3': 'text-xs px-2 py-0.5',
				'2/5': 'text-xs px-2 py-0.5',
				'1/2': 'text-sm px-2.5 py-0.5',
				'3/5': 'text-sm px-2.5 py-0.5',
				'2/3': 'text-base px-3 py-1',
				'3/4': 'text-lg px-3.5 py-1.5',
				full: 'text-xl px-4 py-2'
			}[size] ??
				{
					xs: 'text-[10px] px-1.5 py-0.5',
					sm: 'text-xs px-2 py-0.5',
					md: 'text-sm px-2.5 py-0.5'
				}[DEFAULT_BADGE.size],
			className
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createBadgeState;
