import type { RecipeExpandableCard as RecipeExpandableCard } from '$stylist/commerce/interface/recipe/expandable-card';
import { ObjectManagerExpandableCard } from '$stylist/commerce/class/object-manager/expandable-card';

export function createExpandableCardState(props: RecipeExpandableCard) {
	let isExpanded = $state(props.defaultExpanded ?? false);
	const containerClasses = $derived(
		ObjectManagerExpandableCard.getContainerClasses(props, baseClasses, themedClasses)
	);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get summaryContainerClasses() {
			return summaryContainerClasses;
		},
		get isExpanded() {
			return isExpanded;
		},
		toggleExpanded() {
			isExpanded = ObjectManagerExpandableCard.toggleExpanded(isExpanded, props.disabled ?? false);
		}
	};
}

export default createExpandableCardState;
