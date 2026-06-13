import type { PlaygroundAiChatProps as LegacyPlaygroundAiChatProps1 } from '$stylist/playground/type/struct/playground-ai-chat-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface RecipePlaygroundAiChat
	extends StructIntersectAll<
		[LegacyPlaygroundAiChatProps1, Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>]
	> {
	/** Additional CSS class */
	class?: string;
}
