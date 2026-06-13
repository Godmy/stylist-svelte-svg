import type { RecipeText } from '$stylist/typography/interface/recipe/text';
import createTextPresenterState from '$stylist/typography/function/state/text-presenter/index.svelte';

export function createParagraphState(props: RecipeText) {
	return createTextPresenterState(props, 'c-typography-paragraph');
}

export default createParagraphState;
