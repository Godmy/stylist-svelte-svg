/**
 * ProductComparisonTableContract вЂ” С‚Р°Р±Р»РёС†Р° СЃСЂР°РІРЅРµРЅРёСЏ С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotProductComparisonTableItem {
	id: string;
	name: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}
