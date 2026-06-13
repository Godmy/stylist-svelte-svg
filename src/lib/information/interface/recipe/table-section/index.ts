import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeTableSection
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLTableSectionElement>, SlotContent]> {}
