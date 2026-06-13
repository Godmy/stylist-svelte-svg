import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotProductCarouselItem } from '$stylist/commerce/interface/slot/product-carousel-item';

export interface RecipeProductCarousel
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	products?: SlotProductCarouselItem[];
	class?: string;
}
