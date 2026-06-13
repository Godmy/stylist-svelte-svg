import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * ChartCanvas вЂ” canvas РґР»СЏ РіСЂР°С„РёРєР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:

 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';
import type { ChartScale } from '$stylist/chart/type/struct/chart-scale';

export interface RecipeChartCanvas
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	width?: number;
	height?: number;
	padding?: number;
	series?: ChartSeries[];
	xScale?: ChartScale;
	yScale?: ChartScale;
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	showAxisArrows?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	title?: string;
}
