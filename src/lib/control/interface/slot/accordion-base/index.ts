import type { Snippet } from 'svelte';

export interface SlotAccordionBase {
	value: string;
	class?: string;
	children?: Snippet;
}
