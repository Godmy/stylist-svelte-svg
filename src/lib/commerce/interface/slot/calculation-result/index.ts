/**
 * TaxCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РЅР°Р»РѕРіРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { SlotTaxRate } from '$stylist/commerce/interface/slot/tax-rate';
import type { SlotLocation } from '$stylist/commerce/interface/slot/location';

export interface SlotCalculationResult {
	amount: number;
	taxAmount: number;
	totalAmount: number;
	taxRates: SlotTaxRate[];
	location: SlotLocation;
}
