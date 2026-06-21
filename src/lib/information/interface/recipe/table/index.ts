import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeTable
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, HTMLAttributes<HTMLTableElement>, SlotContent]
	> {
	caption?: string;
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
}
