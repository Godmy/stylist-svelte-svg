import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeOrderItem extends StructIntersectAll<[]> {
	id: string;
	name: string;
	price: number;
	quantity: number;
	variant?: string;
	thumbnail?: string;
}
