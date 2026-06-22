import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSecuritySettings extends HTMLAttributes<HTMLFormElement>, SlotInteraction {
	twoFactor?: boolean;
	loginAlerts?: boolean;
	class?: string;
}
