import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorWishlistButtonEvents } from '$stylist/commerce/interface/behavior/wishlist-button-events';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';

export interface ContractWishlistButton
	extends StructIntersectAll<[BehaviorClickable, HTMLAttributes<HTMLButtonElement>]>,
		BehaviorWishlistButtonEvents {
	inWishlist?: boolean;

	showLabel?: boolean;

	buttonClass?: string;
}
