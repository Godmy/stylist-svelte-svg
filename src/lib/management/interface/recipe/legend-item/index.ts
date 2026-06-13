import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeLegendItem extends StructIntersectAll<[]> {
	label: string;
	type: string;
	count?: number;
	variant?: string;
	active?: boolean;
	onClick?: () => void;
}
