/**
 * ShippingInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РґРѕСЃС‚Р°РІРєРµ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotShippingOptionInfo {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	available?: boolean;
	disabled?: boolean;
	cutoffTime?: string;
	carrier?: string;
	trackingAvailable?: boolean;
	signatureRequired?: boolean;
	insurance?: boolean;
	carbonNeutral?: boolean;
}
