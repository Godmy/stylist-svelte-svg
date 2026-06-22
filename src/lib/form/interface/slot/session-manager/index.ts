import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSessionManager extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	activeSessions?: number;
	expiresAt?: string;
	class?: string;
}
