import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeScience extends StructIntersectAll<[]> {
	id: string;
	type: 'button' | 'select' | 'input' | 'separator';
	label?: string;
	tooltip?: string;
	icon?: string;
	active?: boolean;
	disabled?: boolean;
	value?: unknown;
	options?: string[];
	onclick?: () => void;
}
