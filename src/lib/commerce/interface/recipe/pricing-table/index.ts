import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPricingPlan } from '$stylist/commerce/interface/slot/pricing-plan';

export interface RecipePricingTable
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	plans?: SlotPricingPlan[];
	class?: string;
	className?: string;
}
