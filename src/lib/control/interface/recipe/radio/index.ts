import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotRadio } from '$stylist/control/interface/slot/radio-toggles';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRadio
	extends ComputeIntersectAll<[SlotRadio, HTMLAttributes<HTMLInputElement>, SlotInteraction]> {}
