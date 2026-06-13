import type { ErrorBoundaryProps as LegacyErrorBoundaryProps1 } from '$stylist/notification/type/struct/error-boundary-props';
import type { SlotErrorBoundary as Slot } from '$stylist/notification/interface/slot/error-boundary';
import type { SlotErrorBoundary as SlotErrorBoundary } from '$stylist/notification/interface/slot/error-boundary';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeErrorBoundary
	extends StructIntersectAll<
		[
			LegacyErrorBoundaryProps1,
			Slot,
			SlotErrorBoundary,
			ILabelSlot,
			ICaptionSlot,
			IStatusSlot,
			IClickable,
			IFocusable
		]
	> {}
