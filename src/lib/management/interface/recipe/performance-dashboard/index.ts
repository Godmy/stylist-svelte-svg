import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { BehaviorTimeRangeFilter as ITimeRangeFilter } from '$stylist/calendar/interface/behavior/time-range-filter';
import type { Metric } from '$stylist/management/type/struct/performance-dashboard';

export interface RecipePerformanceDashboard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			ITimeRangeFilter,
			ISizable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	metrics: Metric[];
	headerClass?: string;
	metricsClass?: string;
	metricCardClass?: string;
	variant?: 'default' | 'compact' | 'minimal';
}
