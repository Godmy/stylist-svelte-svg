import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';

export interface RecipeSplitButtonProps
	extends ComputeIntersectAll<
		[SlotButtonAttributesBase, InteractionHTMLAttributes<HTMLButtonElement>]
	> {}
