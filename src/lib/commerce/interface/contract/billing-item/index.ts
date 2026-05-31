/**
 * BillingSummaryContract вЂ” СЃРІРѕРґРєР° РїРѕ СЃС‡С‘С‚Сѓ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє)
 *   ICaptionSlot      (information) вЂ” subtitle (РїРѕРґР·Р°РіРѕР»РѕРІРѕРє)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';

export interface ContractBillingItem {
	id: string;
	description: string;
	amount: number;
	currency: string;
	date: Date;
	status: TokenBillingItem;
}
