import type { SlotPhoneNumberInput as Slot } from '$stylist/input/interface/slot/phone-number-input';
import type { SlotPhoneNumberInput as SlotPhoneNumberInput } from '$stylist/input/interface/slot/phone-number-input';
/**
 * Phone Number Input РІР‚вЂќ Р Р†Р Р†Р С•Р Т‘ Р Р…Р С•Р СР ВµРЎР‚Р В° РЎвЂљР ВµР В»Р ВµРЎвЂћР С•Р Р…Р В°.
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

export interface RecipePhoneNumberInput
	extends StructIntersectAll<
		[Slot, SlotPhoneNumberInput, ILabelSlot, ICaptionSlot, IIconSlot, IFocusable, ISizable]
	> {}
