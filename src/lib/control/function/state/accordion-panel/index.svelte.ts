import type { SlotAccordionPanel as AccordionPanelProps } from '$stylist/control/interface/slot/accordion-panel';

type AccordionPanelContext = {
	isPanelOpen: (value: string) => boolean;
};

type AccordionPanelStateProps = AccordionPanelProps & {
	accordionContext: AccordionPanelContext;
};

export function createAccordionPanelState(props: AccordionPanelStateProps) {
	const ctx = props.accordionContext;
	const isOpen = $derived(ctx.isPanelOpen(props.value));

	return {
		content: props.content,
		get isOpen() {
			return isOpen;
		}
	};
}

export default createAccordionPanelState;
