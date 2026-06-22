import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSearchForm extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	query?: string;
	placeholder?: string;
	class?: string;
}
