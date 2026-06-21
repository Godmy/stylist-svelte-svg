import type { AlertProps as LegacyAlertProps1 } from '$stylist/notification/type/struct/alert-props/alert-props';
import type { SlotAlert as Slot } from '$stylist/notification/interface/slot/alert';
import type { SlotAlert as SlotAlert } from '$stylist/notification/interface/slot/alert';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorMotionPreset as IMotionPreset } from '$stylist/animation/interface/behavior/motion-preset';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeAlert
	extends ComputeIntersectAll<
		[
			LegacyAlertProps1,
			Slot,
			SlotAlert,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IStatusSlot,
			IClickable,
			IMotionPreset,
			ISized,
			IShapeable,
			ISpaced,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
