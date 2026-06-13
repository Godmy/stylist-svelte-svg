import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
// MapSelector props interface
export interface SlotMapSelector extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	onValueChange?: (event: CustomEvent) => void;
}
