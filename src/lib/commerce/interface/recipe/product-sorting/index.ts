import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProductSortingOption } from '$stylist/commerce/interface/slot/product-sorting-option';

export interface RecipeProductSorting
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>, SlotChildren]> {
	options: SlotProductSortingOption[];
	value: string;
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
}
