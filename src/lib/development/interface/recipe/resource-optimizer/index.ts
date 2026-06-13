import type { ResourceOptimizerProps as LegacyResourceOptimizerProps1 } from '$stylist/development/type/struct/resource-optimizer-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipeResourceOptimizer
	extends StructIntersectAll<
		[LegacyResourceOptimizerProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
