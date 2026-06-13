import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
export interface SlotGraphNode extends StructIntersectAll<[SlotChildren]> {
	id: string;
	x: number;
	y: number;
	label?: string;
}
