import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeProductComparisonFeature extends StructIntersectAll<[]> {
	name: string;
	index: number;
}
