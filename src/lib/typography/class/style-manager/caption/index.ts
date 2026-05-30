import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerCaption {
	static root(className?: string): string {
		return mergeClassNames('c-typography-caption', className);
	}
}
