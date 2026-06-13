import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface SkeletonSpecificProps extends StructIntersectAll<[SlotChildren]> {
	type?: 'skeleton' | 'circle' | 'rectangle' | 'text' | 'table';
	width?: string | number;
	height?: string | number;
	lines?: number;
	animated?: boolean;
}
