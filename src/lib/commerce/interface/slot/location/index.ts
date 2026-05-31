/**
 * TaxCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РЅР°Р»РѕРіРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { SlotTaxRate } from '$stylist/commerce/interface/slot/tax-rate';

export interface SlotLocation {
	id: string;
	name: string;
	countryCode: string;
	stateCode?: string;
	zipCode?: string;
	city?: string;
	taxRates: SlotTaxRate[];
}
