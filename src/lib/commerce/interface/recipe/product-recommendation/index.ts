import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotRecommendationProduct } from '$stylist/commerce/interface/slot/recommendation-product';
import type { BehaviorProductRecommendationEvents } from '$stylist/commerce/interface/behavior/product-recommendation-events';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductRecommendation
	extends ComputeIntersectAll<[SlotTheme, SlotLabel, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductRecommendationEvents {
	products: SlotRecommendationProduct[];
}
