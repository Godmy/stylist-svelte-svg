import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SVGAttributes } from 'svelte/elements';

export interface RecipeSvgRect extends ComputeIntersectAll<
	[SlotClass, Omit<SVGAttributes<SVGRectElement>, 'class'>]
> {}
