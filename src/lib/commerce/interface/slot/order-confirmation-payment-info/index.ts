import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';

export interface SlotOrderConfirmationPaymentInfo {
	method: string;
	lastFour?: string;
	status: TokenBillingItem;
}
