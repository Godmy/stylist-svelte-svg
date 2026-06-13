import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeThemeInlineCode } from '$stylist/typography/interface/recipe/inline-code';

export function createInlineCodeState(props: RecipeThemeInlineCode) {
	const classes = $derived(
		mergeClassNames(
			'c-typography-inline-code',
			typeof props.class === 'string' ? props.class : undefined
		)
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;
