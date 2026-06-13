import type { Snippet } from 'svelte';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductCard
	extends StructIntersectAll<
		[SlotTheme, SlotLabel, SlotCaption, SlotBadge, SlotMedia, HTMLAttributes<HTMLDivElement>]
	> {
	variant?: TierContent;
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	badge?: string;
	description?: string;
	actions?: Snippet;
}
