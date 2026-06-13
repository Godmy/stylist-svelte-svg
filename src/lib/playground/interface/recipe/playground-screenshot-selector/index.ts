import type { PlaygroundScreenshotSelectorProps as LegacyPlaygroundScreenshotSelectorProps1 } from '$stylist/playground/type/struct/playground-screenshot-selector-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundScreenshotSelector
	extends StructIntersectAll<
		[
			LegacyPlaygroundScreenshotSelectorProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>
		]
	> {
	/** Additional CSS class */
	class?: string;
}
