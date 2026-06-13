import type { AtomicPrinciplesShowcaseProps as LegacyAtomicPrinciplesShowcaseProps1 } from '$stylist/development/type/struct/atomic-principles-showcase-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeAtomicPrinciplesShowcase
	extends StructIntersectAll<
		[LegacyAtomicPrinciplesShowcaseProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
