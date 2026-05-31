import type { RecipeToggleInputProps as RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';

export interface SlotRadio extends RecipeToggleInputProps {
	value: string;
	label?: string;
}
