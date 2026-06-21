import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCompetitorPrice extends ComputeIntersectAll<[]> {
	name: string;
	price: number;
	url?: string;
}
