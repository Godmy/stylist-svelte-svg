import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotIcon } from '$stylist/media/interface/slot/icon';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';
import type { ProductSortOption } from '$stylist/commerce/type/struct/product-sort-option';

export interface RecipeProductSort
	extends StructIntersectAll<[SlotTheme, SlotLabel, SlotIcon, HTMLAttributes<HTMLDivElement>]> {
	options?: ProductSortOption[];
	selectedOption?: string;
	onValueChange?: (option: string) => void;
}
