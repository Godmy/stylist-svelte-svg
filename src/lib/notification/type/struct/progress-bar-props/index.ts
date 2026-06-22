import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type ProgressBarProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'success' | 'warning' | 'danger';
	class?: string;
};
