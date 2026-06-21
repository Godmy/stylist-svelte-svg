import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { BehaviorTrendable } from '$stylist/management/interface/behavior/trendable';

export interface RecipeStatCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IMetricValue,
			BehaviorTrendable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	variant?: TokenBackground;
	animated?: boolean;
}
