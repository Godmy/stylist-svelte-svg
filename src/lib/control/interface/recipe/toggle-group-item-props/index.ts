import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface RecipeToggleGroupItemProps
	extends StructIntersectAll<[Omit<HTMLButtonAttributes, 'class'>]> {
	value: string;
	disabled?: boolean;
	class?: string;
}
