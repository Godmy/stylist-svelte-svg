import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { Snippet } from 'svelte';
import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card';

/** StatsCard = label + caption + icon + compact stats trend. */
export interface RecipeStatsCard
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLDivElement>]
	> {
	value: string;
	trend?: StatsCardTrend;
	trendValue?: string;
	icon?: Snippet;
}
