import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotFeatureToggle extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	label?: string;
	description?: string;
	checked?: boolean;
	disabled?: boolean;
	class?: string;
	onChange?: (value: boolean) => void;
}
