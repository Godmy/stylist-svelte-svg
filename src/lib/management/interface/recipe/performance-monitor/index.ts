import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { PerformanceMonitorStatus } from '$stylist/management/type/struct/performance-monitor';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

/**
 * PerformanceMonitor = shared label + metric value with analytics status.
 */
export interface RecipePerformanceMonitor
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, IMetricValue, HTMLAttributes<HTMLDivElement>]
	> {
	status?: PerformanceMonitorStatus;
}
