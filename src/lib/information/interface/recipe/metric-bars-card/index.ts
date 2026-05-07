import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MetricBarData } from '$stylist/information/type/struct/metric-bar-data';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

/** MetricBarsCard = titled card that groups multiple metric distribution rows. */
export interface MetricBarsCardRecipe
	extends StructIntersectAll<[ILabelSlot, ICaptionSlot, ThemeAttributes<HTMLElement>]> {
	bars: MetricBarData[];
	total?: string | number;
	color?: string;
	trackColor?: string;
}
