import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { RecipeToggleInputProps as RecipeToggleInputProps } from '$stylist/control/interface/recipe/toggle-input-props';

export interface SlotToggle extends RecipeToggleInputProps {
	toggleSize?: TokenSize;
}
