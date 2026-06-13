import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProductCatalogItem } from '$stylist/commerce/interface/slot/product-catalog-item';

export interface RecipeProductCatalog
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products: SlotProductCatalogItem[];
	layout?: 'grid' | 'list';
}
