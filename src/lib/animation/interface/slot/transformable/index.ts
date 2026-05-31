/** Props для transformable компонента */
import type { Snippet } from 'svelte';
import type { BehaviorTransformable } from '$stylist/animation/interface/behavior/transformable';

export interface SlotTransformable extends BehaviorTransformable {
	class?: string;
	children?: Snippet;
}
