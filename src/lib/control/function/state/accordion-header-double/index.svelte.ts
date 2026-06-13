import type { SlotAccordionHeaderDouble as AccordionHeaderDoubleProps } from '$stylist/control/interface/slot/accordion-header-double';

/**
 * AccordionHeaderDouble state
 */

export function createAccordionHeaderDoubleState(props: AccordionHeaderDoubleProps) {
	const open = $derived(props.open ?? false);
	const disabled = $derived(props.disabled ?? false);

	return {
		get open() {
			return open;
		},
		get disabled() {
			return disabled;
		}
	};
}

export default createAccordionHeaderDoubleState;
