import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
export interface SlotAccordionBase extends StructIntersectAll<[SlotChildren]> {
	value: string;
	class?: string;
}
