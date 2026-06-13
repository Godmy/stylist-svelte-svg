import type { DesignTokensProps as LegacyDesignTokensProps1 } from '$stylist/development/type/struct/design-tokens-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeDesignTokens
	extends StructIntersectAll<
		[LegacyDesignTokensProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
