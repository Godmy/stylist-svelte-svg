/**
 * SubscriptionManagerContract вЂ” СѓРїСЂР°РІР»РµРЅРёРµ РїРѕРґРїРёСЃРєРѕР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє)
 *   ICaptionSlot      (information) вЂ” subtitle (РїРѕРґР·Р°РіРѕР»РѕРІРѕРє)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { SlotSubscriptionPlan } from '$stylist/commerce/interface/slot/subscription-plan';
import type { SubscriptionStatus } from '$stylist/commerce/type/struct/subscription-status';

export interface SlotSubscription {
	id: string;
	plan: SlotSubscriptionPlan;
	startDate: Date;
	endDate?: Date;
	nextBillingDate?: Date;
	status: SubscriptionStatus;
	paymentMethod?: string;
	autoRenew: boolean;
}
