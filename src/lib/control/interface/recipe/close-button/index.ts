import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotButtonElement } from '$stylist/control/interface/slot/button-element';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';

export interface RecipeCloseButton
	extends ComputeIntersectAll<
		[SlotButtonElement, SlotIcon, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
