import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class InlineCodeStyleManager {
	static getInlineCodeClasses(className = ''): string {
		return mergeClassNames('c-typography-inline-code', className);
	}
}
