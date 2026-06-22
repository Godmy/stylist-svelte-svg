import type { TeamAvatarStackProps as LegacyTeamAvatarStackProps2 } from '$stylist/media/type/struct/team-avatar-stack/teamavatarstack-props';
import type { TeamAvatarStackProps as LegacyTeamAvatarStackProps1 } from '$stylist/media/interface/recipe/team-avatar-stack-team-avatar-stack-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionPreset as IMotionToken } from '$stylist/animation/interface/behavior/motion-preset';

export interface RecipeTeamAvatarStack
	extends ComputeIntersectAll<
		[
			LegacyTeamAvatarStackProps2,
			LegacyTeamAvatarStackProps1,
			SlotTheme,
			IMediaSlot,
			ILabelSlot,
			ICaptionSlot,
			IClickable,
			ISizable,
			IElevatable,
			IMotionToken,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
