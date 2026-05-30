/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class BlockquoteStyleManager {
	static getBlockquoteClasses(
		withBorder: boolean,
		withBackground: boolean,
		className?: string
	): string {
		return mergeClassNames(
			'c-typography-blockquote',
			withBorder && 'c-typography-blockquote--bordered',
			withBackground && 'c-typography-blockquote--surface',
			className
		);
	}

	static getFooterClasses(): string {
		return 'c-typography-blockquote__footer';
	}
}
