import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotInputField as BaseInputFieldProps } from '$stylist/input/interface/slot/input-field';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputFieldProps
	extends ComputeIntersectAll<[BaseInputFieldProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
