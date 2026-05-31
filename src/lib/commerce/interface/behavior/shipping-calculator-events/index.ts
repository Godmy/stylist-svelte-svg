/**
 * ShippingCalculatorContract вЂ” РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ СЃС‚РѕРёРјРѕСЃС‚Рё РґРѕСЃС‚Р°РІРєРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { SlotShippingOption } from '$stylist/commerce/interface/slot/shipping-option';

export interface BehaviorShippingCalculatorEvents {
	onCalculate?: (options: SlotShippingOption[]) => void;
	onOptionSelect?: (option: SlotShippingOption) => void;
}
