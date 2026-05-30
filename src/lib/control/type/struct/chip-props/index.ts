import type { Snippet } from 'svelte';
import type { ChipRecipe } from '$stylist/control/interface/recipe/chip';

export type ChipProps = ChipRecipe & {
	text?: string;
	icon?: Snippet;
	content?: Snippet;
};
