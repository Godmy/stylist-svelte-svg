import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChartLegendItem } from '$stylist/navigation/type/struct/chart-legend-item';

export interface ChartLegendProps
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	items?: ChartLegendItem[];
}
