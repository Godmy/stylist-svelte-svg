import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class KbdStyleManager {
	static getKbdClasses(className = ''): string {
		return mergeClassNames('c-typography-kbd', className);
	}
}
