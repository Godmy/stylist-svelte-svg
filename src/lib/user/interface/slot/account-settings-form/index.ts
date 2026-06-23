import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotAccountSettingsForm extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	name?: string;
	email?: string;
	locale?: string;
	class?: string;
}
