import type { HTMLAttributes } from 'svelte/elements';
import type { SlotAccordionBase } from '$stylist/control/interface/slot/accordion-base';

export interface SlotAccordionItem
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof SlotAccordionBase>,
		SlotAccordionBase {}
