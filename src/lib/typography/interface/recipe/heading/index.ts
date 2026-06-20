import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenTypographyTone } from '$stylist/typography/type/enum/tone';

export interface RecipeHeading
	extends StructIntersectAll<
		[SlotTheme, HTMLAttributes<HTMLHeadingElement>, BehaviorTypography, SlotChildren]
	> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	text?: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
