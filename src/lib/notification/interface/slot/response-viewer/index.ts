import type { HTMLAttributes } from 'svelte/elements';

export interface SlotResponseViewer extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	response?: string;
	status?: 'success' | 'error' | 'info';
	class?: string;
}
