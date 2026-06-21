import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';

export interface RecipeIconWrapper
	extends ComputeIntersectAll<[SlotTheme, IIconSlot, HTMLAttributes<HTMLSpanElement>]> {}
