import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';

export interface SlotInlineBase<T extends HTMLElement = HTMLElement>
	extends HtmlAttributesWithChildren<T> {}
