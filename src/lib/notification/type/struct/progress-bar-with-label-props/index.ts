import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type ProgressBarWithLabelProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	value?: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	color?: string;
	height?: string;
	class?: string;
};
