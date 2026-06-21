import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotProgressBar as BaseProgressBarProps } from '$stylist/notification/interface/slot/progress-bar';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeProgressBarProps
	extends ComputeIntersectAll<[BaseProgressBarProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
