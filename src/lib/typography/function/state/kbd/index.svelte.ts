import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeThemeKbd } from '$stylist/typography/interface/recipe/kbd';

export function createKbdState(props: RecipeThemeKbd) {
	const classes = $derived(
		mergeClassNames('c-typography-kbd', typeof props.class === 'string' ? props.class : undefined)
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;
