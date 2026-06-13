import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export interface RecipeCss3dCube
	extends StructIntersectAll<[ArchitectureHTMLAttributes<HTMLDivElement>]> {
	size?: number;
	rotationX?: number;
	rotationY?: number;
	rotationZ?: number;
}
