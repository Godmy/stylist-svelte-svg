import type { RecipeNumberInputProps as LegacyNumberInputProps1 } from '$stylist/input/interface/recipe/number-input-props';
import type { SlotNumberInput as Slot } from '$stylist/input/interface/slot/number-input';
import type { SlotNumberInput as SlotNumberInput } from '$stylist/input/interface/slot/number-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeNumberInput
	extends ComputeIntersectAll<
		[
			LegacyNumberInputProps1,
			Slot,
			SlotNumberInput,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IFocusable,
			ISizable
		]
	> {}
