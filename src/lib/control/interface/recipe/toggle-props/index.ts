import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotToggle as BaseToggleProps } from '$stylist/control/interface/slot/toggle-toggles';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeToggleProps
	extends ComputeIntersectAll<[BaseToggleProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
