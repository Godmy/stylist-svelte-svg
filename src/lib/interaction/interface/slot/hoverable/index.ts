/** Props для hoverable компонента */
import type { Snippet } from 'svelte';
import type { BehaviorHoverable } from '$stylist/interaction/interface/behavior/hoverable';

export interface SlotHoverable extends BehaviorHoverable {
	class?: string;
	children?: Snippet;
}
