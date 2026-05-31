/**
 * RFQFormContract вЂ” С„РѕСЂРјР° Р·Р°РїСЂРѕСЃР° РєРѕРјРјРµСЂС‡РµСЃРєРѕРіРѕ РїСЂРµРґР»РѕР¶РµРЅРёСЏ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє С„РѕСЂРјС‹)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { SlotRfqProduct } from '$stylist/commerce/interface/slot/rfq-product';

export interface SlotRfqFormData {
	requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: SlotRfqProduct[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
	deliveryTerms?: string;
	paymentTerms?: string;
	currency?: string;
	attachments: File[];
}
