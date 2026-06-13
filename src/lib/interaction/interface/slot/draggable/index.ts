import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorDraggable } from '$stylist/interaction/interface/behavior/draggable';

export interface SlotDraggable extends StructIntersectAll<[BehaviorDraggable, SlotChildren]> {
	class?: string;
}
