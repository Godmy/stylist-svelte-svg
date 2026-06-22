import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeIdef0PortLabel
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLSpanElement>]> {
	text: string;
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
	position?: 'left' | 'right' | 'top' | 'bottom';
}
