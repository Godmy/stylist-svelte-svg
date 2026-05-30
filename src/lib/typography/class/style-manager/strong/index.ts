import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StyleManagerStrong {
	static root(disabled: boolean, block: boolean, className?: string): string {
		return mergeClassNames(
			'c-typography-strong',
			disabled && 'c-typography-strong--disabled',
			block && 'c-typography-strong--block',
			className
		);
	}
}
