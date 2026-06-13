import type { DevelopmentErrorBoundaryProps as LegacyDevelopmentErrorBoundaryProps1 } from '$stylist/development/type/struct/development-error-boundary-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { Snippet } from 'svelte';

export interface RecipeDevelopmentErrorBoundary
	extends StructIntersectAll<
		[LegacyDevelopmentErrorBoundaryProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Error fallback content */
	errorFallback?: Snippet;
	/** Additional CSS class */
	class?: string;
}
