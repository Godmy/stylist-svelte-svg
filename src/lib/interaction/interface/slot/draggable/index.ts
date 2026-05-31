/** Props для draggable компонента */
import type { Snippet } from 'svelte';
import type { BehaviorDraggable } from '$stylist/interaction/interface/behavior/draggable';

export interface SlotDraggable extends BehaviorDraggable {
	class?: string;
	children?: Snippet;
}
