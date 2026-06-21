import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';
import type { ChartScale } from '$stylist/chart/type/struct/chart-scale';

export interface RecipeChart
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<SVGSVGElement>]> {
	label?: string;
	caption?: string;
	badge?: string | number;
	series?: ChartSeries[];
	width?: number;
	height?: number;
	showLegend?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	xScale?: ChartScale;
	yScale?: ChartScale;
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	showAxisArrows?: boolean;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	title?: string;
}
