import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotPagination as BasePaginationProps } from '$stylist/navigation/interface/slot/pagination';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePaginationProps
	extends ComputeIntersectAll<[BasePaginationProps, InteractionHTMLAttributes<HTMLDivElement>]> {}
