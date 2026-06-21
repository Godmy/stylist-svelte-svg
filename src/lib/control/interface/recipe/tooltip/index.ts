import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTooltip } from '$stylist/control/interface/slot/tooltip';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { BehaviorShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized } from '$stylist/layout/interface/behavior/sized';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeTooltip
	extends ComputeIntersectAll<
		[
			SlotTooltip,
			SlotLabel,
			SlotCaption,
			BehaviorFocusable,
			BehaviorSized,
			BehaviorShapeable,
			BehaviorMotionPreset,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
