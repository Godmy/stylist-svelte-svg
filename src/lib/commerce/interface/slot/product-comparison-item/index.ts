/**
 * ProductComparisonContract вЂ” СЃСЂР°РІРЅРµРЅРёРµ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotProductComparisonItem {
	id: string;
	name: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}
