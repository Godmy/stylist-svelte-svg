import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotZoomToolbar } from '$stylist/control/interface/slot/zoom-toolbar';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeZoomToolbar
	extends StructIntersectAll<
		[SlotZoomToolbar, SlotLabel, SlotIcon, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
