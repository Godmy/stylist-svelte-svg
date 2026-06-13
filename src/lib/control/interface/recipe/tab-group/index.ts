import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTabGroup } from '$stylist/control/interface/slot/tab-group';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeTabGroup
	extends StructIntersectAll<
		[
			SlotTabGroup,
			SlotLabel,
			SlotIcon,
			BehaviorSelectable<string>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
