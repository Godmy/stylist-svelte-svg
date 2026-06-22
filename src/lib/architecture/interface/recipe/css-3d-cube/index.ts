import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export interface RecipeCss3dCube
	extends ComputeIntersectAll<[LayoutHTMLAttributes<HTMLDivElement>]> {
	size?: number;
	rotationX?: number;
	rotationY?: number;
	rotationZ?: number;
}
