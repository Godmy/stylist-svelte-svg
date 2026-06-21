import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotTextarea as BaseTextAreaProps } from '$stylist/input/interface/slot/textarea';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeTextAreaProps
	extends ComputeIntersectAll<[BaseTextAreaProps, InteractionHTMLAttributes<HTMLTextAreaElement>]> {}
