import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSecureForm extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	token?: string;
	class?: string;
}
