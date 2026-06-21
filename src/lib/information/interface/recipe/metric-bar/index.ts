import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeMetricBar
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, IMetricValue, HTMLAttributes<HTMLDivElement>]
	> {
	valueLabel?: string | number;
	color?: string;
	trackColor?: string;
}
