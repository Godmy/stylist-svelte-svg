import type { PlaygroundGenericCodeViewerProps as LegacyPlaygroundGenericCodeViewerProps1 } from '$stylist/playground/type/struct/playground-generic-code-viewer-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundGenericCodeViewer
	extends StructIntersectAll<
		[
			LegacyPlaygroundGenericCodeViewerProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Additional CSS class */
	class?: string;
}
