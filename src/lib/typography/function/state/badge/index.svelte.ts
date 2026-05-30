import type { BadgeRecipe } from '$stylist/typography/interface/recipe/badge';
import { BadgeStyleManager } from '$stylist/typography/class/style-manager/badge';

export function createBadgeState(props: BadgeRecipe) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const classes = $derived(BadgeStyleManager.getBadgeClasses(variant, size, className));

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
