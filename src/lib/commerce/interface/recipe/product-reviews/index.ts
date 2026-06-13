import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotReview } from '$stylist/commerce/interface/slot/review';
import type { BehaviorProductReviewsEvents } from '$stylist/commerce/interface/behavior/product-reviews-events';

export interface RecipeProductReviews
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductReviewsEvents {
	reviews: SlotReview[];
	averageRating?: number;
	totalReviews?: number;
	showAddReview?: boolean;
}
