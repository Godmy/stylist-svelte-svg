import type { SlotAccordionHeader as AccordionHeaderProps } from '$stylist/control/interface/slot/accordion-header';

type AccordionHeaderContext = {
	isPanelOpen: (value: string) => boolean;
	handleValueChange: (value: string) => void;
};

type AccordionHeaderStateProps = AccordionHeaderProps & {
	accordionContext: AccordionHeaderContext;
};

export function createAccordionHeaderState(props: AccordionHeaderStateProps) {
	const ctx = props.accordionContext;
	const open = $derived(ctx.isPanelOpen(props.value));
	const disabled = props.disabled ?? false;

	return {
		header: props.header,
		get open() {
			return open;
		},
		get disabled() {
			return disabled;
		},
		handleClick() {
			ctx.handleValueChange?.(props.value);
		}
	};
}

export default createAccordionHeaderState;
