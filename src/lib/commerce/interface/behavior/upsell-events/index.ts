/**
 * UpsellContract вЂ” Р±Р»РѕРє Р°РїСЃРµР№Р»Р° (СЂРµРєРѕРјРµРЅРґР°С†РёР№ Рє Р°РїРіСЂРµР№РґСѓ).
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє Р±Р»РѕРєР°)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { SlotUpsellProduct } from '$stylist/commerce/interface/slot/upsell-product';

export interface BehaviorUpsellEvents {
	onProductUpgrade?: (product: SlotUpsellProduct) => void;
	onProductAddToCart?: (product: SlotUpsellProduct) => void;
}
