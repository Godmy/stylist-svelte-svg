import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePriceFilter
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	minPrice?: number;
	maxPrice?: number;
	currentMin?: number;
	currentMax?: number;
	currency?: string;
	class?: string;
	onPriceChange?: (min: number, max: number) => void;
}
