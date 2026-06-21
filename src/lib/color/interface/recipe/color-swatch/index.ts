import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContentProp } from '$stylist/information/type/struct/content-prop';

export interface RecipeThemeColorSwatch
	extends ComputeIntersectAll<[ContentProp, HTMLAttributes<HTMLDivElement>]> {
	color?: string;
	size?: number;
}
