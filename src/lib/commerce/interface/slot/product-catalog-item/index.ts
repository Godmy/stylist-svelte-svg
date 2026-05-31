/**
 * ProductCatalogContract вЂ” РєР°С‚Р°Р»РѕРі С‚РѕРІР°СЂРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotProductCatalogItem {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
	badge?: string;
}
