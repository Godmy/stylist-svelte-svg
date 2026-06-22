import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type ProgressCircleProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	progress?: number;
	size?: 'sm' | 'md' | 'lg';
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
	strokeWidth?: number;
	class?: string;
};
