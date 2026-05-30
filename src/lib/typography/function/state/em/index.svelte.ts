import { EmStyleManager } from '$stylist/typography/class/style-manager/em';
import type { ThemeEmRecipe } from '$stylist/typography/interface/recipe/em';

export function createEmState(props: ThemeEmRecipe) {
	const classes = $derived(EmStyleManager.getEmClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createEmState;
