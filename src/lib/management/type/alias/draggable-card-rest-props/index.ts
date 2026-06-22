import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type DraggableCardRestProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & SlotInteraction;
