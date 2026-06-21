import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { Snippet } from 'svelte';

export interface RecipeCardWithImage
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			IMediaSlot,
			IBadgeSlot,
			IIconSlot,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
	imageClass?: string;
	footer?: Snippet;
	actions?: Snippet;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	actionsClass?: string;
}
