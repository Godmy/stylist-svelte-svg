import type { PlaygroundDrawingOverlayProps as LegacyPlaygroundDrawingOverlayProps1 } from '$stylist/playground/type/struct/playground-drawing-overlay-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundDrawingOverlay
	extends StructIntersectAll<
		[LegacyPlaygroundDrawingOverlayProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
