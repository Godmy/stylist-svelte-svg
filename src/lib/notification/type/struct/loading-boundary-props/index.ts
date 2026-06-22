import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LoadingBoundaryProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	loading?: boolean;
	error?: string;
	children?: Snippet;
	class?: string;
};
