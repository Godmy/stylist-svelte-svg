/**
 * PriceHistoryContract вЂ” РіСЂР°С„РёРє РёСЃС‚РѕСЂРёРё С†РµРЅ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє РіСЂР°С„РёРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface SlotPriceHistoryDataPoint {
	date: string;
	price: number;
}
