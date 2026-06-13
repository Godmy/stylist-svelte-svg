import type { SpinnerProps as LegacySpinnerProps2 } from '$stylist/notification/type/struct/spinner-props';
import type { RecipeSpinnerProps as LegacySpinnerProps1 } from '$stylist/notification/interface/recipe/spinner-props';
import type { SlotSpinner as Slot } from '$stylist/notification/interface/slot/spinner';
import type { SlotSpinner as SlotSpinner } from '$stylist/notification/interface/slot/spinner';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeSpinner
	extends StructIntersectAll<
		[
			LegacySpinnerProps2,
			LegacySpinnerProps1,
			Slot,
			SlotSpinner,
			ILabelSlot,
			ISized,
			IShapeable,
			ISpaced,
			SlotTheme,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
