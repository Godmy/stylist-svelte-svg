import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { Props } from '$stylist/information/type/struct/props';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotPageButton
	extends StructIntersectAll<
		[Omit<Props, 'children' | 'page' | 'isActive'>, SlotButtonDom, SlotChildren]
	> {
	class?: string;
	page?: number;
	isActive?: boolean;
}
