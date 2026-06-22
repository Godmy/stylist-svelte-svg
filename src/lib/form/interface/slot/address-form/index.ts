import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotAddressForm extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	street?: string;
	city?: string;
	region?: string;
	postalCode?: string;
	country?: string;
	class?: string;
}
