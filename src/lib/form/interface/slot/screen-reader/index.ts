import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotScreenReader extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	title?: string;
	content?: string;
	class?: string;
}
