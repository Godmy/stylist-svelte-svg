import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export interface RecipeCss3dCube
	extends ComputeIntersectAll<[ArchitectureHTMLAttributes<HTMLDivElement>]> {
	size?: number;
	rotationX?: number;
	rotationY?: number;
	rotationZ?: number;
}
