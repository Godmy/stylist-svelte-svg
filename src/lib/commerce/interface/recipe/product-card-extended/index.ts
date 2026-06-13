import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductCardExtended
	extends StructIntersectAll<
		[SlotTheme, SlotLabel, SlotCaption, SlotBadge, SlotMedia, HTMLAttributes<HTMLDivElement>]
	> {
	price?: number;
	currency?: string;
	rating?: number;
	reviewCount?: number;
	features?: string[];
	onAddToCart?: () => void;
	onWishlist?: () => void;
}
