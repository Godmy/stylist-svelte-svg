import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ClassProp } from '$stylist/information/type/struct';

export interface SlotButtonAttributesBase extends Omit<HTMLButtonAttributes, 'class'>, ClassProp {}
