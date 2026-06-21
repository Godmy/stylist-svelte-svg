import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeFavicon extends ComputeIntersectAll<[SlotChildren]> {
	size?: number;
	url?: string;
	error?: boolean;
	onError?: () => void;
	content?: string;
	class?: string;
}
