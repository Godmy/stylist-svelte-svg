import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';
import type { StructRichTextMark } from '$stylist/typography/type/struct/rich-text-mark';

export interface RecipeRichText
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLElement>, TypographyTextProps]> {
	text: string;
	marks?: StructRichTextMark[];
}
