import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type FormSelectionProps = HTMLAttributes<HTMLElement> & SlotInteraction & {
	title?: string;
	description?: string;
	collapsible?: boolean;
	initiallyCollapsed?: boolean;
	required?: boolean;
	border?: boolean;
	padding?: boolean;
	class?: string;
	headerClass?: string;
	contentClass?: string;
	children: Snippet;
};
