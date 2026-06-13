import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMenuItem } from '$stylist/control/interface/slot/menu-item';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeMenuItem
	extends StructIntersectAll<
		[SlotMenuItem, SlotLabel, SlotIcon, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
