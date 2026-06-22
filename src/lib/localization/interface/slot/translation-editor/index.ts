import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotTranslationEditor extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	sourceText?: string;
	targetLocale?: string;
	class?: string;
}
