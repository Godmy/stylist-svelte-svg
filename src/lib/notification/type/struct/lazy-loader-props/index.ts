import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type LazyLoaderProps = HTMLAttributes<HTMLDivElement> & SlotInteraction & {
	loading?: boolean;
	text?: string;
	children?: Snippet;
	class?: string;
};
