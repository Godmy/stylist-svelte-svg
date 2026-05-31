/**
 * UpsellContract вЂ” Р±Р»РѕРє Р°РїСЃРµР№Р»Р° (СЂРµРєРѕРјРµРЅРґР°С†РёР№ Рє Р°РїРіСЂРµР№РґСѓ).
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє Р±Р»РѕРєР°)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface SlotUpsellProduct {
	id: string;
	name: string;
	description?: string;
	price: number;
	originalPrice?: number;
	thumbnail?: string;
	rating?: number;
	reviewCount?: number;
	inStock?: boolean;
	isRecommended?: boolean;
	category?: string;
	discountPercent?: number;
	tags?: string[];
}
