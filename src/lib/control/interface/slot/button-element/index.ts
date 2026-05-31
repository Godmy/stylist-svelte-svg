import type { Snippet } from 'svelte';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotButtonCore } from '$stylist/control/interface/slot/button-core';

export interface SlotButtonElement extends Omit<SlotButtonCore, 'children'>, SlotButtonDom {
	class?: string;
	children?: Snippet;
}
