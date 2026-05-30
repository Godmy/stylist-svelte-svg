import { DefinitionTermStyleManager } from '$stylist/typography/class/style-manager/definition-term';
import type { ThemeDefinitionTermRecipe } from '$stylist/typography/interface/recipe/definition-term';

export function createDefinitionTermState(props: ThemeDefinitionTermRecipe) {
	const classes = $derived(DefinitionTermStyleManager.getDefinitionTermClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionTermState;
