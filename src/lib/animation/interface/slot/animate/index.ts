/** Props для animate компонента */
import type { Snippet } from 'svelte';
import type { BehaviorAnimate } from '$stylist/animation/interface/behavior/animate';

export interface SlotAnimate extends BehaviorAnimate {
	class?: string;
	children?: Snippet;
}
