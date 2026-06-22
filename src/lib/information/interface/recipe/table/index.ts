import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/layout/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeTable
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, HTMLAttributes<HTMLTableElement>, SlotContent]
	> {
	caption?: string;
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
}
