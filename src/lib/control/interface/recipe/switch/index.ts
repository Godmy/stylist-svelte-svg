import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotSwitch } from '$stylist/control/interface/slot/switch';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSwitch
	extends ComputeIntersectAll<[SlotSwitch, InteractionHTMLAttributes<HTMLInputElement>]> {}
