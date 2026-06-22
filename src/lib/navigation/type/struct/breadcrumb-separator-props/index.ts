import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type BreadcrumbSeparatorProps = {
	class?: string;
	children?: Snippet;
} & HTMLAttributes<HTMLSpanElement> & SlotInteraction;
