import type { RecipePaginationProps as LegacyPaginationProps2 } from '$stylist/navigation/interface/recipe/pagination-props';
import type { PaginationStateProps as LegacyPaginationProps1 } from '$stylist/navigation/interface/recipe/pagination-pagination-state-props';
import type { SlotPagination as Slot } from '$stylist/navigation/interface/slot/pagination';
import type { SlotPagination as SlotPagination } from '$stylist/navigation/interface/slot/pagination';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipePagination
	extends ComputeIntersectAll<
		[
			LegacyPaginationProps2,
			LegacyPaginationProps1,
			Slot,
			SlotPagination,
			ILabelSlot,
			IIconSlot,
			IClickable,
			IFocusable,
			ISizable
		]
	> {}
