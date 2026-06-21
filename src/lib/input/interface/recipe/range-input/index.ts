import type { SlotRangeInput as Slot } from '$stylist/input/interface/slot/range-input';
import type { SlotRangeInput as SlotRangeInput } from '$stylist/input/interface/slot/range-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeRangeInput
	extends ComputeIntersectAll<
		[Slot, SlotRangeInput, ILabelSlot, ICaptionSlot, ISelectable<number>, IFocusable, ISizable]
	> {}
