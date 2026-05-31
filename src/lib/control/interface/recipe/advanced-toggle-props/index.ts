import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';

export interface RecipeAdvancedToggleProps extends StructIntersectAll<[RecipeToggleBaseProps]> {
	label?: string;
	checked?: boolean;
	onValueInput?: (value: boolean) => void;
	onValueChange?: (value: boolean) => void;
	onChange?: (value: boolean) => void;
}
