import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeTable
	extends StructIntersectAll<
		[SlotTheme, ILabelSlot, HTMLAttributes<HTMLTableElement>, SlotContent]
	> {
	caption?: string;
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
}
