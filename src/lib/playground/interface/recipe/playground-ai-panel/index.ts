import type { PlaygroundAiPanelProps as LegacyPlaygroundAiPanelProps1 } from '$stylist/playground/type/struct/playground-ai-panel-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundAiPanel
	extends StructIntersectAll<
		[LegacyPlaygroundAiPanelProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
