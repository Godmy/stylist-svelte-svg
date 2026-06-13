import type { SlotTagInput as Slot } from '$stylist/input/interface/slot/tag-input';
import type { SlotTagInput as SlotTagInput } from '$stylist/input/interface/slot/tag-input';
/**
 * Tag Input РІР‚вЂќ Р Р†Р Р†Р С•Р Т‘ РЎвЂљР ВµР С–Р С•Р Р†.
 *
 * LEGO-РЎРѓР С•РЎРѓРЎвЂљР В°Р Р†:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   ISelectable<string[]>     (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeTagInput
	extends StructIntersectAll<
		[Slot, SlotTagInput, ILabelSlot, ICaptionSlot, ISelectable<string[]>, IFocusable, ISizable]
	> {}
