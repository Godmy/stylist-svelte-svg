import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';

export interface ContractOrderConfirmationPaymentInfo {
	method: string;
	lastFour?: string;
	status: TokenBillingItem;
}
