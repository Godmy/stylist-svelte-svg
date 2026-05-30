import { HighlightStyleManager } from '$stylist/typography/class/style-manager/highlight';
import type { ThemeHighlightRecipe } from '$stylist/typography/interface/recipe/highlight';

export function createHighlightState(props: ThemeHighlightRecipe) {
	const classes = $derived(HighlightStyleManager.getHighlightClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createHighlightState;
