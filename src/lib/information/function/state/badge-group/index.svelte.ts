import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeBadgeGroup } from '$stylist/information/interface/recipe/badge-group';

export function createBadgeGroupState(props: RecipeBadgeGroup) {
	const badges = $derived(props.badges ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showOverflow = $derived(props.showOverflow ?? true);
	const badgeClass = $derived(props.badgeClass ?? '');
	const visibleBadges = $derived(badges.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, badges.length - maxVisible));
	const containerClasses = $derived(
		mergeClassNames(
			'flex flex-wrap items-center gap-2',
			typeof props.class === 'string' ? props.class : ''
		)
	);
	const overflowClasses = $derived(
		mergeClassNames(
			'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5',
			props.overflowClass ?? ''
		)
	);

	return {
		get badgeClass() {
			return badgeClass;
		},
		get visibleBadges() {
			return visibleBadges;
		},
		get showOverflow() {
			return showOverflow;
		},
		get overflowCount() {
			return overflowCount;
		},
		get containerClasses() {
			return containerClasses;
		},
		get overflowClasses() {
			return overflowClasses;
		}
	};
}

export default createBadgeGroupState;
