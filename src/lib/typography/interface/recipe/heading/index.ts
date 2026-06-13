import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';
export interface RecipeHeading
	extends StructIntersectAll<
		[SlotTheme, HTMLAttributes<HTMLHeadingElement>, TypographyTextProps, SlotChildren]
	> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
