import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCopyButton } from '$stylist/control/interface/slot/copy-button';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeCopyButton
	extends StructIntersectAll<
		[SlotCopyButton, SlotLabel, SlotIcon, BehaviorClickable, BehaviorFocusable, BehaviorSizable]
	> {}
