import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeNumberFlow
	extends StructIntersectAll<[SlotTheme, SlotLabel, SlotBadge, HTMLAttributes<HTMLDivElement>]> {
	value?: number;
	locales?: Intl.LocalesArgument;
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
}
