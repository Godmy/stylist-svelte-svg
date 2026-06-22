import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { FeedbackSpecificProps } from '$stylist/control/interface/recipe/feedback-specific-props';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorMotionPreset as IMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeFeedback
	extends ComputeIntersectAll<
			[
				ILabelSlot,
				ICaptionSlot,
				IStatusSlot,
				IIconSlot,
				IClickable,
				IFocusable,
				ISized,
				IShapeable,
				IMotionPreset,
				SlotTheme,
				HTMLAttributes<HTMLDivElement>
			]
		>,
		FeedbackSpecificProps {}
