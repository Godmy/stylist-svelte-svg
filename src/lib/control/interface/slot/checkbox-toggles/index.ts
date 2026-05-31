import type { RecipeToggleInputProps as RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';

export interface SlotCheckbox extends RecipeToggleInputProps {
	id?: string;
	label?: string;
	description?: string;
	errors?: string[];
	required?: boolean;
	indeterminate?: boolean;
}
