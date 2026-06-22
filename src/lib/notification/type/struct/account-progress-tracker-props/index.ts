import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type AccountProgressTrackerProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	steps?: string[];
	currentStep?: number;
	class?: string;
	[propName: string]: unknown;
};
