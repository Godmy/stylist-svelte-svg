import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MetricBarData } from '$stylist/information/type/struct/metric-bar-data';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

/** MetricBarsCard = titled card that groups multiple metric distribution rows. */
export interface RecipeMetricBarsCard
	extends StructIntersectAll<[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLElement>]> {
	bars: MetricBarData[];
	total?: string | number;
	color?: string;
	trackColor?: string;
}
