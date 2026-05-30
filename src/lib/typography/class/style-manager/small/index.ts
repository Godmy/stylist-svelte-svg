import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerSmall {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return mergeClassNames(
			'c-typography-small',
			disabled && 'c-typography-small--disabled',
			block && 'c-typography-small--block',
			className
		);
	}
}
