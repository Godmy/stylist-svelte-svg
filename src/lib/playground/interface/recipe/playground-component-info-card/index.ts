import type { PlaygroundComponentInfoCardProps as LegacyPlaygroundComponentInfoCardProps1 } from '$stylist/playground/type/struct/playground-component-info-card-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundComponentInfoCard
	extends StructIntersectAll<
		[
			LegacyPlaygroundComponentInfoCardProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Component name */
	componentName?: string;
	/** Component description */
	description?: string;
	/** Component category */
	category?: string;
	/** Component status */
	status?: 'stable' | 'beta' | 'alpha' | 'deprecated';
	/** Additional CSS class */
	class?: string;
}
