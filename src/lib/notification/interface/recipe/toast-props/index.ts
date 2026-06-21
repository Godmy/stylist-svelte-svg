import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ToastProps as BaseToastProps } from '$stylist/notification/type/struct/toast-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeToastProps
	extends ComputeIntersectAll<[BaseToastProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
