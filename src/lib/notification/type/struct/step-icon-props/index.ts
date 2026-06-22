import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type StepIconProps = HTMLAttributes<HTMLSpanElement> & SlotInteraction & {
	status?: 'pending' | 'active' | 'completed' | 'error';
	size?: 'sm' | 'md' | 'lg';
	stepNumber?: number;
	iconName?: string;
	class?: string;
	children?: Snippet;
};
