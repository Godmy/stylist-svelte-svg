import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerSuperscript {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return mergeClassNames(
			'c-typography-superscript',
			disabled && 'c-typography-superscript--disabled',
			block && 'c-typography-superscript--block',
			className
		);
	}
}
