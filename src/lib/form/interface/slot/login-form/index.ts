import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotLoginForm extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	email?: string;
	rememberMe?: boolean;
	class?: string;
}
