import type { PlaygroundComponentCatalogProps as LegacyPlaygroundComponentCatalogProps1 } from '$stylist/playground/type/struct/playground-component-catalog-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundComponentCatalog
	extends StructIntersectAll<
		[
			LegacyPlaygroundComponentCatalogProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Additional CSS class */
	class?: string;
}
