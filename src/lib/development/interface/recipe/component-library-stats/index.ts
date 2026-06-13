import type { ComponentLibraryStatsProps as LegacyComponentLibraryStatsProps1 } from '$stylist/development/type/struct/component-library-stats-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeComponentLibraryStats
	extends StructIntersectAll<
		[LegacyComponentLibraryStatsProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
