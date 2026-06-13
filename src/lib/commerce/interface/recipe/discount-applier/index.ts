import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotDiscountRule } from '$stylist/commerce/interface/slot/discount-rule';
import type { SlotCartItem } from '$stylist/commerce/interface/slot/cart-item';
import type { BehaviorDiscountApplierEvents } from '$stylist/commerce/interface/behavior/discount-applier-events';

export interface RecipeDiscountApplier
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorDiscountApplierEvents {
	rules: SlotDiscountRule[];

	cartItems: SlotCartItem[];

	cartTotal: number;

	appliedCodes?: string[];

	currency?: string;

	locale?: string;

	showCodeInput?: boolean;

	showRuleList?: boolean;

	showAppliedRules?: boolean;

	inputClass?: string;

	buttonClass?: string;
}
