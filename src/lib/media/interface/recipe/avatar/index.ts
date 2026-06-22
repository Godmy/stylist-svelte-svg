import type { TeamAvatarStackProps as LegacyAvatarProps5 } from '$stylist/media/type/struct/team-avatar-stack/teamavatarstack-props';
import type { AvatarGroupProps as LegacyAvatarProps4 } from '$stylist/media/type/struct/avatar-group/avatargroup-props';
import type { TeamAvatarStackProps as LegacyAvatarProps3 } from '$stylist/media/interface/recipe/team-avatar-stack-team-avatar-stack-props';
import type { AvatarGroupProps as LegacyAvatarProps2 } from '$stylist/media/interface/recipe/avatar-group-avatar-group-props';
import type { AvatarProps as LegacyAvatarProps1 } from '$stylist/media/interface/recipe/avatar-avatar-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface RecipeAvatar
	extends ComputeIntersectAll<
		[
			LegacyAvatarProps5,
			LegacyAvatarProps4,
			LegacyAvatarProps3,
			LegacyAvatarProps2,
			LegacyAvatarProps1,
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
