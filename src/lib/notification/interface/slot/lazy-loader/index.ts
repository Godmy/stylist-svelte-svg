import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
export interface SlotLazyLoader
	extends StructIntersectAll<[InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {
	loading?: boolean;
	text?: string;
	class?: string;
}
