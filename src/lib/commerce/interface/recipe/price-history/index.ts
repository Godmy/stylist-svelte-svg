import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPriceHistoryDataPoint } from '$stylist/commerce/interface/slot/price-history-data-point';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipePriceHistory
	extends StructIntersectAll<[SlotTheme, SlotLabel, HTMLAttributes<HTMLDivElement>]> {
	data?: SlotPriceHistoryDataPoint[];
	currency?: string;
	class?: string;
}
