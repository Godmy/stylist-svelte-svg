import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeAnimatedNumber
	extends ComputeIntersectAll<[ILabelSlot, IBadgeSlot, SlotClass, SlotTheme]> {
	value?: number;
	format?: 'number' | 'currency' | 'percent';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
}
