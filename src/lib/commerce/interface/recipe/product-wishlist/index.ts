import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotWishlistItem } from '$stylist/commerce/interface/slot/wishlist-item';
import type { BehaviorProductWishlistEvents } from '$stylist/commerce/interface/behavior/product-wishlist-events';

export interface RecipeProductWishlist
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductWishlistEvents {
	items: SlotWishlistItem[];
}
