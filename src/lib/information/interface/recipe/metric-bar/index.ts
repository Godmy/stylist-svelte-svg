import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

/** MetricBar = one labeled metric row with progress visualization. */
export interface MetricBarRecipe
	extends StructIntersectAll<[ILabelSlot, IMetricValue, ThemeAttributes<HTMLDivElement>]> {
	valueLabel?: string | number;
	color?: string;
	trackColor?: string;
}
