import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
// MockDataSelector props interface
export interface SlotMockDataSelector extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	options?: Array<{ value: string; label: string }>;
	value?: string;
	placeholder?: string;
	onValueInput?: (event: Event) => void;
	onValueChange?: (event: Event) => void;
}
