import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTabs } from '$stylist/control/interface/slot/tabs';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeTabs
	extends StructIntersectAll<
		[SlotTabs, SlotLabel, SlotIcon, BehaviorSelectable<string>, BehaviorFocusable, BehaviorSizable]
	> {}
