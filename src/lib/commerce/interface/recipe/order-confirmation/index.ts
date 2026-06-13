import type { SlotOrderConfirmation } from '$stylist/commerce/interface/slot/order-confirmation';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeOrderConfirmation
	extends StructIntersectAll<[SlotOrderConfirmation, SlotTheme, HTMLAttributes<HTMLDivElement>]> {}
