import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface AvatarSelectorProps extends StructIntersectAll<[SlotChildren]> {
	src?: string;
	alt?: string;
	size?: string;
	class?: string;
}
