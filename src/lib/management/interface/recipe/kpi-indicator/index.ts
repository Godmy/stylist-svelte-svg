import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { TokenKPI } from '$stylist/management/type/enum/kpi';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { BehaviorTrendable as ITrendable } from '$stylist/management/interface/behavior/trendable';

/**
 * KPIIndicator = shared label + metric + trend + size with analytics KPI status.
 */
export interface RecipeKPIIndicator
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, IMetricValue, ITrendable, ISizable, HTMLAttributes<HTMLDivElement>]
	> {
	status?: TokenKPI;
	titleClass?: string;
	valueClass?: string;
}
