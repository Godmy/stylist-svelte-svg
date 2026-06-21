import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';

export interface RecipeLinkCard
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IMediaSlot, IIconSlot, HTMLAttributes<HTMLAnchorElement>]
	> {
	title?: string;
	description?: string;
	href: string;
	newTab?: boolean;
	variant?: 'default' | 'subtle' | 'outline';
	icon?: string;
	showArrow?: boolean;
}
