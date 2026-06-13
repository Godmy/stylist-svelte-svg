import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComboboxItem } from '$stylist/control/type/struct/combobox/item';

// Combobox props interface
export interface SlotCombobox extends StructIntersectAll<[SlotChildren]> {
	id: string;
	items: ComboboxItem[];
	value?: string | null;
	label?: string;
	description?: string;
	placeholder?: string;
	emptyText?: string;
	disabled?: boolean;
	clearable?: boolean;
	loading?: boolean;
	class?: string;
}
