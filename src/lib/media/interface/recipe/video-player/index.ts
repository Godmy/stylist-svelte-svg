import type { VideoPlayerProps as LegacyVideoPlayerProps1 } from '$stylist/media/interface/recipe/video-player-video-player-props';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionPreset as IMotionToken } from '$stylist/animation/interface/behavior/motion-preset';

export interface RecipeVideoPlayer
	extends ComputeIntersectAll<
		[
			LegacyVideoPlayerProps1,
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
