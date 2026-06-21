import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { BehaviorMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface RecipeMetricCard
	extends ComputeIntersectAll<
		[SlotTheme, SlotClass, SlotLabel, SlotCaption, SlotBadge, SlotStatus, BehaviorMetricValue]
	> {
	description?: string;
	variant?: TokenAppearance;
	showProgressBar?: boolean;
}
