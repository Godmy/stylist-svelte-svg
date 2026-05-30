import type { BadgeGroupRecipe } from '$stylist/typography/interface/recipe/badge-group';
import { BadgeStyleManager } from '$stylist/typography/class/style-manager/badge';

export function createBadgeGroupState(props: BadgeGroupRecipe) {
	const badges = $derived(props.badges ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showOverflow = $derived(props.showOverflow ?? true);
	const badgeClass = $derived(props.badgeClass ?? '');
	const visibleBadges = $derived(badges.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, badges.length - maxVisible));
	const containerClasses = $derived(
		BadgeStyleManager.getBadgeGroupContainerClasses(
			typeof props.class === 'string' ? props.class : ''
		)
	);
	const overflowClasses = $derived(
		BadgeStyleManager.getBadgeGroupOverflowClasses(props.overflowClass ?? '')
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
