import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotIconButton as BaseIconButtonProps } from '$stylist/control/interface/slot/icon-button';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeIconButtonProps
	extends ComputeIntersectAll<[BaseIconButtonProps, InteractionHTMLAttributes<HTMLButtonElement>]> {}
