/**
 * ProductRecommendationContract вЂ” Р±Р»РѕРє СЂРµРєРѕРјРµРЅРґР°С†РёР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє Р±Р»РѕРєР°)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface BehaviorProductRecommendationEvents {
	onProductClick?: (id: string) => void;
}
