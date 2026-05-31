/**
 * ShippingCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ СЃС‚РѕРёРјРѕСЃС‚Рё РґРѕСЃС‚Р°РІРєРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */

export interface SlotShippingOption {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	carrier?: string;
	trackingAvailable?: boolean;
}
