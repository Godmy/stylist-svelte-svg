import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeChartBackground
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<SVGRectElement>]> {
	width?: number;
	height?: number;
	fill?: string;
	stroke?: string;
}
