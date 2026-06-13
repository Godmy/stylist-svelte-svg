import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
export interface SlotLoadingBoundary
	extends StructIntersectAll<[InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {
	loading?: boolean;
	error?: string;
	class?: string;
}
