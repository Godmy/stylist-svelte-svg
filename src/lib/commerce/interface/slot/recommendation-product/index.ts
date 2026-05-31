/**
 * ProductRecommendationContract вЂ” Р±Р»РѕРє СЂРµРєРѕРјРµРЅРґР°С†РёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє Р±Р»РѕРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface SlotRecommendationProduct {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}
