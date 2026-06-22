import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface SlotFormHeader extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	title: string;
	subtitle?: string;
	description?: string;
	actions?: Snippet;
	backAction?: () => void;
	backButtonLabel?: string;
	class?: string;
	titleClass?: string;
	subtitleClass?: string;
	descriptionClass?: string;
	actionsClass?: string;
	backButtonClass?: string;
}
