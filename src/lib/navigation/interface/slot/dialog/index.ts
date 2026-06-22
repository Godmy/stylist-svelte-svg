import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotDialog extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	open?: boolean;
	title?: string;
	description?: string;
	class?: string;
	onClose?: () => void;
}
