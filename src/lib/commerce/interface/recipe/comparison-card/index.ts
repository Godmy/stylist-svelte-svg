import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { ComparisonCardColumn } from '$stylist/commerce/interface/slot/comparison-card-column';

export interface RecipeComparisonCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotLabel,
			SlotCaption,
			SlotMedia,
			SlotBadge,
			SlotStatus,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	title?: string;
	before: ComparisonCardColumn;
	after: ComparisonCardColumn;
}
