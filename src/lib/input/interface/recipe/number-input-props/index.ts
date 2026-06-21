import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotNumberInput as BaseNumberInputProps } from '$stylist/input/interface/slot/number-input';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeNumberInputProps
	extends ComputeIntersectAll<[BaseNumberInputProps, InteractionHTMLAttributes<HTMLInputElement>]> {}
