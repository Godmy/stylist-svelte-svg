import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotQuantitySelector } from '$stylist/control/interface/slot/quantity-selector';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeQuantitySelector
	extends StructIntersectAll<
		[SlotQuantitySelector, SlotLabel, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
