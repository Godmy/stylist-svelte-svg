import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class HighlightStyleManager {
	static getHighlightClasses(className = ''): string {
		return mergeClassNames('c-typography-highlight', className);
	}
}
