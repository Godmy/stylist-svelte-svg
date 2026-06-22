import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { Snippet } from 'svelte';

export interface RecipeDataDisplayCard
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IBadgeSlot, IStatusSlot, HTMLAttributes<HTMLDivElement>]
	> {
	title?: string;
	subtitle?: string;
	description?: string;
	image?: string;
	footer?: Snippet;
	actions?: Snippet;
	imageClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	actionsClass?: string;
}
