import type { HTMLAttributes } from 'svelte/elements';
export interface RecipeFlag extends Omit<HTMLAttributes<HTMLSpanElement>, 'class'> {
	flag?: string;
	code?: string;
	class?: string;
	size?: number | string;
}
