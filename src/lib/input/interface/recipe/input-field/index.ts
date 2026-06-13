import type { InputFieldRequiredProps as LegacyInputFieldProps3 } from '$stylist/input/type/struct/input-field-required-props';
import type { InputFieldBaseProps as LegacyInputFieldProps2 } from '$stylist/input/type/struct/input-field-base-props';
import type { RecipeInputFieldProps as LegacyInputFieldProps1 } from '$stylist/input/interface/recipe/input-field-props';
import type { SlotInputField as Slot } from '$stylist/input/interface/slot/input-field';
import type { SlotInputField as SlotInputField } from '$stylist/input/interface/slot/input-field';
/**
 * Input Field РІР‚вЂќ Р С—Р С•Р В»Р Вµ Р Р†Р Р†Р С•Р Т‘Р В° РЎРѓ Р В»Р ВµР в„–Р В±Р В»Р С•Р С Р С‘ Р С—Р С•Р Т‘РЎРѓР С”Р В°Р В·Р С”Р В°Р СР С‘.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IStatusSlot               (information/status-slot)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface RecipeInputField
	extends StructIntersectAll<
		[
			LegacyInputFieldProps3,
			LegacyInputFieldProps2,
			LegacyInputFieldProps1,
			Slot,
			SlotInputField,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IStatusSlot,
			IFocusable,
			ISizable
		]
	> {}
