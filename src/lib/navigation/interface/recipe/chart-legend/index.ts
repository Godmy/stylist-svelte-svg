import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ChartLegendItem } from '$stylist/navigation/type/struct/chart-legend-item';

export interface ChartLegendProps
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	items?: ChartLegendItem[];
}
