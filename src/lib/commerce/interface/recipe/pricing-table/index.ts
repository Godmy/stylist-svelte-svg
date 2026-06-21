import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPricingPlan } from '$stylist/commerce/interface/slot/pricing-plan';

export interface RecipePricingTable
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	plans?: SlotPricingPlan[];
	class?: string;
	className?: string;
}
