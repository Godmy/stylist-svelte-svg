import type { RecipeComparisonCard } from '$stylist/commerce/interface/recipe/comparison-card';

export function createComparisonCardState(props: RecipeComparisonCard) {
	return {
		get containerClass() {
			return ['comparison-card', props.class].filter(Boolean).join(' ');
		}
	};
}
