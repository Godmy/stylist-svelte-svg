import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotAccordionBase } from '$stylist/control/interface/slot/accordion-base';

export interface SlotAccordionHeaderDouble
	extends Omit<HTMLButtonAttributes, keyof SlotAccordionBase>,
		SlotAccordionBase {
	open?: boolean;
	disabled?: boolean;
}
