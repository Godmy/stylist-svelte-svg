import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDimensionable as IDimensionable } from '$stylist/layout/interface/behavior/dimensionable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { BehaviorLegendable as ILegendable } from '$stylist/chart/interface/behavior/legendable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { TokenAnalyticsChartType } from '$stylist/chart/type/struct/analytics-chart';
import type { AnalyticsChartDataPoint } from '$stylist/chart/type/struct/analytics-chart-data-point';

/**
 * AnalyticsChart = label + caption + frame + legend toggle + analytics dataset.
 */
export interface RecipeAnalyticsChart
	extends StructIntersectAll<
		[
			SlotTheme,
			IDimensionable,
			ILabelSlot,
			ICaptionSlot,
			ILegendable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	data: AnalyticsChartDataPoint[];
	type?: TokenAnalyticsChartType;
	title?: string;
	showTrend?: boolean;
	trendValue?: number;
	chartClass?: string;
	legendClass?: string;
}
