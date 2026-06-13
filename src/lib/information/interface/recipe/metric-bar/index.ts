import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

/** MetricBar = one labeled metric row with progress visualization. */
export interface RecipeMetricBar
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, IMetricValue, HTMLAttributes<HTMLDivElement>]
	> {
	valueLabel?: string | number;
	color?: string;
	trackColor?: string;
}
