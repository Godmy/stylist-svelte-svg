import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';

export interface SlotTabPanel extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, SlotChildren {
	id: string;
	disabled?: boolean;
}
