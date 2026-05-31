import type {
	HtmlAttributesWithChildren
} from '$stylist/information/interface/slot';

export interface SlotTabContainer extends HtmlAttributesWithChildren<HTMLDivElement> {
	disabled?: boolean;
}
