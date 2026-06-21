import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPriceHistoryDataPoint } from '$stylist/commerce/interface/slot/price-history-data-point';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipePriceHistory
	extends ComputeIntersectAll<[SlotTheme, SlotLabel, HTMLAttributes<HTMLDivElement>]> {
	data?: SlotPriceHistoryDataPoint[];
	currency?: string;
	class?: string;
}
