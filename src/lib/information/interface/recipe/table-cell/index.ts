import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeTableCell
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLTableCellElement>, SlotContent]
	> {
	variant?: 'data' | 'header';
	align?: 'left' | 'center' | 'right';
}
