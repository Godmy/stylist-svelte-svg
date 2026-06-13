import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMultiSelect } from '$stylist/control/interface/slot/multi-select';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeMultiSelect
	extends StructIntersectAll<
		[
			SlotMultiSelect,
			SlotLabel,
			SlotCaption,
			SlotIcon,
			BehaviorSelectable<string[]>,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable
		]
	> {}
