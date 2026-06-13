import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeShippingRegion extends StructIntersectAll<[]> {
	id: string;
	name: string;
	countries: string[];
	additionalFee?: number;
	restrictions?: string[];
}
