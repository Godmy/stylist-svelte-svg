import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContentProp } from '$stylist/information/type/struct/content-prop';

export interface RecipeThemeColorSwatch
	extends StructIntersectAll<[ContentProp, HTMLAttributes<HTMLDivElement>]> {
	color?: string;
	size?: number;
}
