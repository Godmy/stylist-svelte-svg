/**
 * OrderConfirmationContract вЂ” РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';

export interface ContractOrderConfirmationPaymentInfo {
	method: string;
	lastFour?: string;
	status: TokenBillingItem;
}
