import type { RecipeTextAreaProps as LegacyTextAreaProps1 } from '$stylist/input/interface/recipe/text-area-props';
/**
 * Text Area РІР‚вЂќ Р СР Р…Р С•Р С–Р С•РЎРѓРЎвЂљРЎР‚Р С•РЎвЂЎР Р…Р С•Р Вµ Р С—Р С•Р В»Р Вµ Р Р†Р Р†Р С•Р Т‘Р В°.
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

export interface RecipeTextArea
	extends StructIntersectAll<
		[LegacyTextAreaProps1, ILabelSlot, ICaptionSlot, IIconSlot, IFocusable, ISizable]
	> {}
