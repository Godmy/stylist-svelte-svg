import type { RecipeCategoryCard } from '$stylist/commerce/interface/recipe/category-card';
export function createCategoryCardState(props: RecipeCategoryCard) {
	const ariaLabel = $derived(`${props.title} category with ${props.count} components`);

	return {
		get classes() {
			return classes;
		},
		get ariaLabel() {
			return ariaLabel;
		}
	};
}

export default createCategoryCardState;
