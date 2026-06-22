import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeIdef0Connector
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	label: string;
	direction?: 'input' | 'output';
	showArrow?: boolean;
	color?: string;
}
