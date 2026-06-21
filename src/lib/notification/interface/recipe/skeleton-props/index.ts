import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotSkeleton as BaseSkeletonProps } from '$stylist/notification/interface/slot/skeleton';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeSkeletonProps
	extends ComputeIntersectAll<[BaseSkeletonProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
