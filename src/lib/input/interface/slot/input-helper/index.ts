import type { HTMLAttributes } from 'svelte/elements';
import type { ClassProp, ContentProp } from '$stylist/information/type/struct';



export interface SlotInputHelper<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ContentProp {}
