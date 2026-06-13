import type { PlaygroundComponentTreeProps as LegacyPlaygroundComponentTreeProps1 } from '$stylist/playground/type/struct/playground-component-tree-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundComponentTree
	extends StructIntersectAll<
		[LegacyPlaygroundComponentTreeProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
