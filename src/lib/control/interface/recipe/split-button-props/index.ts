import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';

export interface RecipeSplitButtonProps
	extends ComputeIntersectAll<
		[SlotButtonAttributesBase, HTMLAttributes<HTMLButtonElement>, SlotInteraction]
	> {}
