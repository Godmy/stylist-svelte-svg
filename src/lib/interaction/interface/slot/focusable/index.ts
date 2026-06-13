import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';

export interface SlotFocusable extends StructIntersectAll<[BehaviorFocusable, SlotChildren]> {
	class?: string;
}
