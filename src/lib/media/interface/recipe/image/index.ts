import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeImage extends StructIntersectAll<[SlotChildren]> {
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
