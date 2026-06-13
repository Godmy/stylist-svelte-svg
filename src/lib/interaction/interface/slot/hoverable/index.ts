import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
/** Props для hoverable компонента */
import type { BehaviorHoverable } from '$stylist/interaction/interface/behavior/hoverable';

export interface SlotHoverable extends StructIntersectAll<[BehaviorHoverable, SlotChildren]> {
	class?: string;
}
