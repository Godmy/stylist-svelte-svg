import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { PostCardAction } from '$stylist/commerce/interface/slot/post-card-action';

export interface RecipePostCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ComputeIntersectAll<
				[ILabelSlot, ICaptionSlot, IMediaSlot, IBadgeSlot, IIconSlot, HTMLAttributes<HTMLElement>]
			>,
			SlotChildren
		]
	> {
	title?: string;
	subtitle?: string;
	image?: string;
	date?: string;
	excerpt?: string;
	author?: string;
	tags?: string[];
	actions?: PostCardAction[];
}
