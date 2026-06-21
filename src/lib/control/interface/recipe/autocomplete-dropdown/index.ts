import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable as IScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeAutocompleteDropdown
	extends ComputeIntersectAll<
		[ILabelSlot, ICaptionSlot, IIconSlot, ISelectable<string>, IFocusable, ISizable, IScrollable]
	> {}
