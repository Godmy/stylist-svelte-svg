import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerText {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return mergeClassNames(
			'c-typography-text',
			disabled && 'c-typography-text--disabled',
			block && 'c-typography-text--block',
			className
		);
	}
}
