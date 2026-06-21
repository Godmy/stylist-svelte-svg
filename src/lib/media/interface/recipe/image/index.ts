import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeImage extends ComputeIntersectAll<[SlotChildren]> {
	src?: string;
	alt?: string;
	fallback?: string;
	loading?: 'eager' | 'lazy';
	width?: number;
	height?: number;
	content?: string;
	onLoad?: () => void;
	onError?: () => void;
	variant?: string;
	size?: string;
	class?: string;
}
