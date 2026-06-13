import type { SlotConfirmationDialog as Slot } from '$stylist/navigation/interface/slot/confirmation-dialog';
import type { SlotConfirmationDialog as SlotConfirmationDialog } from '$stylist/navigation/interface/slot/confirmation-dialog';
/**
 * Confirmation Dialog РІР‚вЂќ Р Т‘Р С‘Р В°Р В»Р С•Р С– Р С—Р С•Р Т‘РЎвЂљР Р†Р ВµРЎР‚Р В¶Р Т‘Р ВµР Р…Р С‘РЎРЏ.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeConfirmationDialog
	extends StructIntersectAll<
		[
			Slot,
			SlotConfirmationDialog,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IClickable,
			IFocusable,
			ISizable
		]
	> {}
