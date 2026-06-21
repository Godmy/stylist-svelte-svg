import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface NodeIconProps extends ComputeIntersectAll<[]> {
	icon?: string;
	size?: number;
	accent?: string;
	background?: string;
}
