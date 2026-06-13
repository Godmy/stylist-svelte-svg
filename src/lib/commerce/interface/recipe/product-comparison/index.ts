import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProductComparisonItem } from '$stylist/commerce/interface/slot/product-comparison-item';

export interface RecipeProductComparison
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products: SlotProductComparisonItem[];
	features: string[];
}
