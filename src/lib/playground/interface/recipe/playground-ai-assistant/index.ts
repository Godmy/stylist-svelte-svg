import type { PlaygroundAiAssistantProps as LegacyPlaygroundAiAssistantProps1 } from '$stylist/playground/type/struct/playground-ai-assistant-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundAiAssistant
	extends StructIntersectAll<
		[LegacyPlaygroundAiAssistantProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
