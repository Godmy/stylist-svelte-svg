import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChartAxis } from '$stylist/chart/interface/slot/chart-axis';

export interface RecipeChartAxisY
	extends StructIntersectAll<[SlotTheme, SlotChartAxis, HTMLAttributes<SVGGElement>]> {
	x?: number;
	ticks?: number[];
	showGrid?: boolean;
	gridEndX?: number;
	tickLabels?: Array<string | number>;
}
