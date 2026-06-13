import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSortableTableHeader } from '$stylist/control/interface/slot/sortable-table-header';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeSortableTableHeader
	extends StructIntersectAll<
		[
			SlotSortableTableHeader,
			SlotLabel,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
