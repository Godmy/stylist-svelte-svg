import type { RecipePaginationProps as LegacyPaginationProps2 } from '$stylist/navigation/interface/recipe/pagination-props';
import type { PaginationStateProps as LegacyPaginationProps1 } from '$stylist/navigation/interface/recipe/pagination-pagination-state-props';
import type { SlotPagination as Slot } from '$stylist/navigation/interface/slot/pagination';
import type { SlotPagination as SlotPagination } from '$stylist/navigation/interface/slot/pagination';
/**
 * Pagination РІР‚вЂќ Р С—Р С•РЎРѓРЎвЂљРЎР‚Р В°Р Р…Р С‘РЎвЂЎР Р…Р В°РЎРЏ Р Р…Р В°Р Р†Р С‘Р С–Р В°РЎвЂ Р С‘РЎРЏ.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot                (information/label-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipePagination
	extends StructIntersectAll<
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
