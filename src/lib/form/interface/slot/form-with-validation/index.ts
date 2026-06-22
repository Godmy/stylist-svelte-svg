import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotFormWithValidation extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	email?: string;
	password?: string;
	class?: string;
}
