import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Idef0Port } from '$stylist/science/type/struct/idef-zero/idef0port';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeIdef0Inputs
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<HTMLDivElement>]> {
	ports: Idef0Port[];
	boxY: number;
	boxHeight: number;
}
