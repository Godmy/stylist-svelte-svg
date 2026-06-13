import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSwitchWithLabel } from '$stylist/control/interface/slot/switch-with-label';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeSwitchWithLabel
	extends StructIntersectAll<
		[
			SlotSwitchWithLabel,
			SlotLabel,
			SlotCaption,
			SlotStatus,
			BehaviorSelectable<boolean>,
			BehaviorFocusable,
			BehaviorSizable
		]
	> {}
