import type { Snippet } from 'svelte';

export interface SlotAccordionDataItem {
	id: string;
	title: string;
	content: Snippet | string;
	disabled?: boolean;
}
