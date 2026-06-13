import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeOrderSort extends StructIntersectAll<[]> {
	field: 'date' | 'total' | 'status';
	direction: 'asc' | 'desc';
}
