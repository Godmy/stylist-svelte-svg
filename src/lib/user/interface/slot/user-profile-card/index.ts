import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotUserProfileCard extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	name?: string;
	role?: string;
	email?: string;
	class?: string;
}
