import { InlineCodeStyleManager } from '$stylist/typography/class/style-manager/inline-code';
import type { ThemeInlineCodeRecipe } from '$stylist/typography/interface/recipe/inline-code';

export function createInlineCodeState(props: ThemeInlineCodeRecipe) {
	const classes = $derived(InlineCodeStyleManager.getInlineCodeClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;
