import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotDropdownMenu } from '$stylist/control/interface/slot/dropdown-menu';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorScrollable } from '$stylist/layout/interface/behavior/scrollable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeDropdownMenu
	extends ComputeIntersectAll<
		[
			SlotDropdownMenu,
			SlotLabel,
			SlotIcon,
			BehaviorClickable,
			BehaviorFocusable,
			BehaviorSizable,
			BehaviorScrollable
		]
	> {}
