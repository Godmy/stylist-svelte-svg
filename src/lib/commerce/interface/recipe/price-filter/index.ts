import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipePriceFilter
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	minPrice?: number;
	maxPrice?: number;
	currentMin?: number;
	currentMax?: number;
	currency?: string;
	class?: string;
	onPriceChange?: (min: number, max: number) => void;
}
