import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ValidationOrientation } from '../validationorientation';

export type ValidationProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	label?: string;
	description?: string;
	required?: boolean;
	error?: string;
	hint?: string;
	disabled?: boolean;
	orientation?: ValidationOrientation;
	class?: string;
	id?: string;
	children: Snippet;
};
