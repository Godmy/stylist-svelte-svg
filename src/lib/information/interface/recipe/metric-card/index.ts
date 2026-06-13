import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

/**
 * MetricCard = shared information slots + metric value + analytics progress affordance.
 */
export interface RecipeMetricCard
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IMetricValue, HTMLAttributes<HTMLDivElement>]
	> {
	percentage: number;
	variant?: TokenAppearance;
	showProgressBar?: boolean;
}
