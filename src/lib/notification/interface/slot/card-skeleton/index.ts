import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotCardSkeleton extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	count?: number;
	showAvatar?: boolean;
	class?: string;
}
