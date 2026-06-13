import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCountBadge
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	count?: number;
	max?: number;
	showZero?: boolean;
}
