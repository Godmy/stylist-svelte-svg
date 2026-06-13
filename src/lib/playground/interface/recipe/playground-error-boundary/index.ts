import type { PlaygroundErrorBoundaryProps as LegacyPlaygroundErrorBoundaryProps1 } from '$stylist/playground/type/struct/playground-error-boundary-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundErrorBoundary
	extends StructIntersectAll<
		[LegacyPlaygroundErrorBoundaryProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
