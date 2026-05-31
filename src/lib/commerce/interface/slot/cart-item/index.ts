/**
 * DiscountApplierContract вЂ” РїСЂРёРјРµРЅРµРЅРёРµ СЃРєРёРґРѕРє Рё РїСЂРѕРјРѕРєРѕРґРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotCartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	category?: string;
}
