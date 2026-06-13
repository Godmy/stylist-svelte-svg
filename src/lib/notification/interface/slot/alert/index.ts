import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface SlotAlert extends StructIntersectAll<[SlotChildren]> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	class?: string;
}
