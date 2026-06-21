import type { SlotOrderConfirmation } from '$stylist/commerce/interface/slot/order-confirmation';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeOrderConfirmation
	extends ComputeIntersectAll<[SlotOrderConfirmation, SlotTheme, HTMLAttributes<HTMLDivElement>]> {}
