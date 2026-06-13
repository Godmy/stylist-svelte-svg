import type { SlotAccordionItem as AccordionItemProps } from '$stylist/control/interface/slot/accordion-item';

type AccordionItemContext = {
	accordionId: string;
	isPanelOpen: (value: string) => boolean;
};

type AccordionItemStateProps = AccordionItemProps & {
	accordionContext: AccordionItemContext;
};

export function createAccordionItemState(props: AccordionItemStateProps) {
	const ctx = props.accordionContext;
	const uniqueId = $derived(`${ctx.accordionId}-${props.value}`);
	const expanded = $derived(ctx.isPanelOpen(props.value));

	return {
		get uniqueId() {
			return uniqueId;
		},
		get expanded() {
			return expanded;
		}
	};
}

export default createAccordionItemState;
