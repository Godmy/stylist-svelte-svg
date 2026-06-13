import type { SlotReactionPicker as Slot } from '$stylist/input/interface/slot/reaction-picker';
import type { SlotReactionPicker as SlotReactionPicker } from '$stylist/input/interface/slot/reaction-picker';
/**
 * Reaction Picker РІР‚вЂќ Р Р†РЎвЂ№Р В±Р С•РЎР‚ РЎР‚Р ВµР В°Р С”РЎвЂ Р С‘Р С‘.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot                (information/label-slot)
 *   IIconSlot                 (information/icon-slot)
 *   ISelectable<string>       (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeReactionPicker
	extends StructIntersectAll<
		[Slot, SlotReactionPicker, ILabelSlot, IIconSlot, ISelectable<string>, IFocusable, ISizable]
	> {}
