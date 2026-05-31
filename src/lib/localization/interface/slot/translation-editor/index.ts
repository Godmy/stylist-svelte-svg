import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotTranslationEditor extends InteractionHTMLAttributes<HTMLDivElement> {
	sourceText?: string;
	targetLocale?: string;
	class?: string;
}
