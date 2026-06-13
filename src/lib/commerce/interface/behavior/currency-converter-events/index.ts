import type { SlotConversionResult } from '$stylist/commerce/interface/slot/conversion-result';

export interface BehaviorCurrencyConverterEvents {
	onConvert?: (result: SlotConversionResult) => void;
	onCurrencyChange?: (from: string, to: string) => void;
}
