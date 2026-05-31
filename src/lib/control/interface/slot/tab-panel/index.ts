import type {
	HtmlAttributesWithChildren
} from '$stylist/information/interface/slot';

export interface SlotTabPanel extends HtmlAttributesWithChildren<HTMLDivElement> {
	id: string;
	disabled?: boolean;
}
