import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerParagraph {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return mergeClassNames(
			'c-typography-paragraph',
			disabled && 'c-typography-paragraph--disabled',
			block && 'c-typography-paragraph--block',
			className
		);
	}
}
