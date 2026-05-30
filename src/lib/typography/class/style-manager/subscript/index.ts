import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerSubscript {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return mergeClassNames(
			'c-typography-subscript',
			disabled && 'c-typography-subscript--disabled',
			block && 'c-typography-subscript--block',
			className
		);
	}
}
