import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { MetricBarData } from '$stylist/information/type/struct/metric-bar-data';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeMetricBarsCard
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLElement>]> {
	bars: MetricBarData[];
	total?: string | number;
	color?: string;
	trackColor?: string;
}
