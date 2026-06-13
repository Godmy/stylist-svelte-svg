import type { RecipeAdvancedAccordion } from '$stylist/control/interface/recipe/advanced-accordion';

export function createAdvancedAccordionState(props: RecipeAdvancedAccordion) {
	let activeIndex = $state(0);

	function setActiveIndex(index: number) {
		activeIndex = index;
	}

	return {
		get activeIndex() {
			return activeIndex;
		},
		setActiveIndex
	};
}
