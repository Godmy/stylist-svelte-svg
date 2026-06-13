import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ToggleFilter } from '$stylist/control/type/struct/filter-bar/toggle-filter';
import type { TagFilter } from '$stylist/control/type/struct/filter-bar/tag-filter';
import type { RangeFilter } from '$stylist/control/type/struct/filter-bar/range-filter';

// FilterBar props interface
export interface SlotFilterBar extends StructIntersectAll<[SlotChildren]> {
	toggles?: ToggleFilter[];
	tags?: TagFilter[];
	range?: RangeFilter;
	onClear?: () => void;
	class?: string;
}
