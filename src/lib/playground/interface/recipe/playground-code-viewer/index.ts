import type { PlaygroundCodeViewerProps as LegacyPlaygroundCodeViewerProps1 } from '$stylist/playground/type/struct/playground-code-viewer-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundCodeViewer
	extends StructIntersectAll<
		[LegacyPlaygroundCodeViewerProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Code content */
	code?: string;
	/** Programming language */
	language?: string;
	/** Read-only mode */
	readonly?: boolean;
	/** Additional CSS class */
	class?: string;
}
