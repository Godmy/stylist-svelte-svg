import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeInputControl
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IIconSlot, IStatusSlot, HTMLAttributes<HTMLInputElement>]
	> {}
