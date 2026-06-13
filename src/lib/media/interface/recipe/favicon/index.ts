import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeFavicon extends StructIntersectAll<[SlotChildren]> {
	size?: number;
	url?: string;
	error?: boolean;
	onError?: () => void;
	content?: string;
	class?: string;
}
