import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeIdef0FunctionBox
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLDivElement>]
	> {
	title?: string;
	subtitle?: string;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
}
