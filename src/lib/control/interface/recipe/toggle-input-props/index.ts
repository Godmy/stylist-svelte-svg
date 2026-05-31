import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';

export interface RecipeToggleInputProps
	extends StructIntersectAll<
		[Omit<HTMLInputAttributes, 'size' | 'disabled' | 'checked' | 'class'>, RecipeToggleBaseProps]
	> {
	checked?: boolean;
}
