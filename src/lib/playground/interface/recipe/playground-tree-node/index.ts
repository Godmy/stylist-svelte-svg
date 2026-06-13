import type { PlaygroundTreeNodeProps as LegacyPlaygroundTreeNodeProps1 } from '$stylist/playground/type/struct/playground-tree-node-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundTreeNode
	extends StructIntersectAll<
		[LegacyPlaygroundTreeNodeProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
