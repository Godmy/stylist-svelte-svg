import type { RecipeAccordion } from '$stylist/control/interface/recipe/accordion';

export function createAccordionState(props: RecipeAccordion) {
	let activeIds = $state<string[]>([]);

	function toggleAccordion(id: string) {
		if (activeIds.includes(id)) {
			activeIds = activeIds.filter((activeId) => activeId !== id);
			return;
		}

		activeIds = props.multiple ? [...activeIds, id] : [id];
	}

	function isExpanded(id: string): boolean {
		return activeIds.includes(id);
	}

	return {
		get activeIds() {
			return activeIds;
		},
		toggleAccordion,
		isExpanded
	};
}
