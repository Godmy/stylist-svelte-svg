import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

export interface RecipeMetricCard
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IMetricValue, HTMLAttributes<HTMLDivElement>]
	> {
	percentage: number;
	variant?: TokenAppearance;
	showProgressBar?: boolean;
}
