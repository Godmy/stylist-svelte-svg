import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';

export type LocationPickerRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotInteraction;
