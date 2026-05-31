/**
 * CurrencyConverterContract вЂ” РєРѕРЅРІРµСЂС‚РµСЂ РІР°Р»СЋС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable        (interaction) вЂ” disabled, loading
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */

export interface SlotConversionResult {
	fromAmount: number;
	fromCurrency: string;
	toAmount: number;
	toCurrency: string;
	exchangeRate: number;
	feeAmount?: number;
}
