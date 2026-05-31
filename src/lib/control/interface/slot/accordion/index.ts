import type { SlotAccordionDataItem } from '$stylist/control/interface/slot/accordion-data-item';

export interface SlotAccordion {
	items: SlotAccordionDataItem[];
	multiple?: boolean;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	contentClass?: string;
}
