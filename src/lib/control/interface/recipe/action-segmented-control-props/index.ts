import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeActionSegmentedControlProps extends StructIntersectAll<[]> {
	items: string[];
	selectedIndex?: number;
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: number) => void;
	class?: string;
}
