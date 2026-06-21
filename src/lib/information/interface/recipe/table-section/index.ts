import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeTableSection
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLTableSectionElement>, SlotContent]> {}
