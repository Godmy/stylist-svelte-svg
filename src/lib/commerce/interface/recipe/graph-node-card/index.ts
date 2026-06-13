import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeGraphNodeCard
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	label?: string;
	caption?: string;
	badge?: string | number;
	status?: string;
}
