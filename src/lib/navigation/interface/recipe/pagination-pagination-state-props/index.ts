import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPagination as PaginationProps } from '$stylist/navigation/interface/slot/pagination';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface PaginationStateProps
	extends ComputeIntersectAll<
		[PaginationProps, Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	class?: string;
}
