import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProductComparisonTableItem } from '$stylist/commerce/interface/slot/product-comparison-table-item';

export interface RecipeProductComparisonTable
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products: SlotProductComparisonTableItem[];
	specifications: Array<{ name: string; values: string[] }>;
}
