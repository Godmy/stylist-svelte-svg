import type { PlaygroundLiveCodeSectionProps as LegacyPlaygroundLiveCodeSectionProps1 } from '$stylist/playground/type/struct/playground-live-code-section-props';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
export interface RecipePlaygroundLiveCodeSection
	extends StructIntersectAll<
		[
			LegacyPlaygroundLiveCodeSectionProps1,
			Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>,
			SlotChildren
		]
	> {
	/** Content snippet */
	/** Additional CSS class */
	class?: string;
}
