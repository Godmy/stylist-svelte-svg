import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCompetitorPrice extends StructIntersectAll<[]> {
	name: string;
	price: number;
	url?: string;
}
