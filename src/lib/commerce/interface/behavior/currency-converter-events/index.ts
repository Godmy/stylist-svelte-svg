/**
 * CurrencyConverterContract вЂ” РєРѕРЅРІРµСЂС‚РµСЂ РІР°Р»СЋС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable        (interaction) вЂ” disabled, loading
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { SlotConversionResult } from '$stylist/commerce/interface/slot/conversion-result';

export interface BehaviorCurrencyConverterEvents {
	onConvert?: (result: SlotConversionResult) => void;
	onCurrencyChange?: (from: string, to: string) => void;
}
