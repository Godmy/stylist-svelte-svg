import { KbdStyleManager } from '$stylist/typography/class/style-manager/kbd';
import type { ThemeKbdRecipe } from '$stylist/typography/interface/recipe/kbd';

export function createKbdState(props: ThemeKbdRecipe) {
	const classes = $derived(KbdStyleManager.getKbdClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;
