import { DefinitionDescriptionStyleManager } from '$stylist/typography/class/style-manager/definition-description';
import type { ThemeDefinitionDescriptionRecipe } from '$stylist/typography/interface/recipe/definition-description';

export function createDefinitionDescriptionState(props: ThemeDefinitionDescriptionRecipe) {
	const classes = $derived(
		DefinitionDescriptionStyleManager.getDefinitionDescriptionClasses(props.class ?? '')
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionDescriptionState;
