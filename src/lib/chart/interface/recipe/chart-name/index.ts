import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeChartName
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLHeadingElement>]> {
	label?: string;
	text?: string;
	x?: number;
	y?: number;
	color?: string;
}
