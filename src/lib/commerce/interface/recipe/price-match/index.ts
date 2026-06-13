import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeCompetitorPrice } from '$stylist/commerce/interface/recipe/competitor-price';
import type { BehaviorPriceMatchEvents } from '$stylist/commerce/interface/behavior/price-match-events';

export interface RecipePriceMatch
	extends StructIntersectAll<
		[SlotTheme, HTMLAttributes<HTMLDivElement>, BehaviorPriceMatchEvents]
	> {
	targetPrice?: number;
	competitorPrices?: RecipeCompetitorPrice[];
	currency?: string;
	productName?: string;
	class?: string;
}
