import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type ResponseViewerProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	title?: string;
	response?: string;
	status?: string;
	class?: string;
};
