import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSimpleModal extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	open?: boolean;
	title?: string;
	class?: string;
	onClose?: () => void;
}
