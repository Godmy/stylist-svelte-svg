import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPageButton } from '$stylist/control/interface/slot/page-button';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipePageButton
	extends StructIntersectAll<
		[SlotPageButton, SlotLabel, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
