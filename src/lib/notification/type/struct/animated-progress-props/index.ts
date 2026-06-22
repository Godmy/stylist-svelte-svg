import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type AnimatedProgressProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	value?: number;
	min?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	class?: string;
};
