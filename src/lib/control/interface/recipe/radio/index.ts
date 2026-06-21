import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotRadio } from '$stylist/control/interface/slot/radio-toggles';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRadio
	extends ComputeIntersectAll<[SlotRadio, InteractionHTMLAttributes<HTMLInputElement>]> {}
