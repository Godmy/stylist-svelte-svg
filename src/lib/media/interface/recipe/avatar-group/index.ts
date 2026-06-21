import type { AvatarGroupProps as LegacyAvatarGroupProps2 } from '$stylist/media/type/struct/avatar-group/avatargroup-props';
import type { AvatarGroupProps as LegacyAvatarGroupProps1 } from '$stylist/media/interface/recipe/avatar-group-avatar-group-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeAvatarGroup
	extends ComputeIntersectAll<
		[
			LegacyAvatarGroupProps2,
			LegacyAvatarGroupProps1,
			SlotTheme,
			IMediaSlot,
			ILabelSlot,
			IStatusSlot,
			IBadgeSlot,
			IClickable,
			ISizable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
