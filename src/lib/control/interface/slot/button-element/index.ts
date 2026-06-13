import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotButtonCore } from '$stylist/control/interface/slot/button-core';

export interface SlotButtonElement
	extends StructIntersectAll<[Omit<SlotButtonCore, 'children'>, SlotButtonDom, SlotChildren]> {
	class?: string;
}
