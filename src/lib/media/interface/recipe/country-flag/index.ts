import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';

export interface RecipeCountryFlag
	extends ComputeIntersectAll<[SlotTheme, IMediaSlot, ILabelSlot, HTMLAttributes<HTMLSpanElement>]> {
	countryCode?: string;
	size?: number;
	content?: string;
}
