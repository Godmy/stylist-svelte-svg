/**
 * SubscriptionManagerContract вЂ” СѓРїСЂР°РІР»РµРЅРёРµ РїРѕРґРїРёСЃРєРѕР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє)
 *   ICaptionSlot      (information) вЂ” subtitle (РїРѕРґР·Р°РіРѕР»РѕРІРѕРє)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface SlotSubscriptionPlan {
	id: string;
	name: string;
	description: string;
	price: number;
	period: string;
	currency: string;
	features: string[];
}
