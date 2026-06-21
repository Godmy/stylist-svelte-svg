import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeAtomicPrinciples
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, IBadgeSlot, HTMLAttributes<HTMLDivElement>]
	> {
	stats?: { atoms: number; molecules: number; organisms: number };
	badgeText?: string;
}
