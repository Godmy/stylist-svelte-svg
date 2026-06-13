import type { SlotAdvancedPasswordInput as Slot } from '$stylist/input/interface/slot/advanced-password-input';
import type { SlotAdvancedPasswordInput as SlotAdvancedPasswordInput } from '$stylist/input/interface/slot/advanced-password-input';
/**
 * Advanced Password Input РІР‚вЂќ РЎР‚Р В°РЎРѓРЎв‚¬Р С‘РЎР‚Р ВµР Р…Р Р…Р С•Р Вµ Р С—Р С•Р В»Р Вµ Р С—Р В°РЎР‚Р С•Р В»РЎРЏ.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeAdvancedPasswordInput
	extends StructIntersectAll<
		[Slot, SlotAdvancedPasswordInput, ILabelSlot, ICaptionSlot, IIconSlot, IFocusable, ISizable]
	> {}
