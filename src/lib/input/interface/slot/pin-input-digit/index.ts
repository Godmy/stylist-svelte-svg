import type { HtmlAttributesBase } from '$stylist/information/interface/slot';



export interface SlotPinInputDigit extends HtmlAttributesBase<HTMLInputElement> {
	value?: string;
	focused?: boolean;
	invalid?: boolean;
}
