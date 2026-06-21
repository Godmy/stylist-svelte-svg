import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotUpsellProduct } from '$stylist/commerce/interface/slot/upsell-product';
import type { BehaviorUpsellEvents } from '$stylist/commerce/interface/behavior/upsell-events';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeUpsell
	extends ComputeIntersectAll<[SlotTheme, SlotLabel, SlotCaption, HTMLAttributes<HTMLDivElement>]>,
		BehaviorUpsellEvents {
	currentProduct: SlotUpsellProduct;

	upsellProducts: SlotUpsellProduct[];

	maxProducts?: number;

	currency?: string;

	locale?: string;

	showSavings?: boolean;

	showReason?: boolean;

	headerClass?: string;

	productListClass?: string;

	productCardClass?: string;
}
