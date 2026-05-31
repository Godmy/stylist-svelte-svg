/**
 * TaxCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РЅР°Р»РѕРіРѕРІ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { SlotCalculationResult } from '$stylist/commerce/interface/slot/calculation-result';

export interface BehaviorTaxCalculatorEvents {
	onCalculate?: (result: SlotCalculationResult) => void;
}
