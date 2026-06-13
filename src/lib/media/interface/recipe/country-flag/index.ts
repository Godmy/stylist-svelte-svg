import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';

export interface RecipeCountryFlag
	extends StructIntersectAll<[SlotTheme, IMediaSlot, ILabelSlot, HTMLAttributes<HTMLSpanElement>]> {
	countryCode?: string;
	size?: number;
	content?: string;
}
