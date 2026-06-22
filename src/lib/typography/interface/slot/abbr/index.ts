import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';

export interface SlotAbbr extends Omit<HTMLAttributes<HTMLElement>, 'children'>, SlotChildren {
	title?: string;
}
