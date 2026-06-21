import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePageEllipsis
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {}
