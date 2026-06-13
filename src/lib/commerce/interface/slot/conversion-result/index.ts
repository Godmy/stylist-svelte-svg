export interface SlotConversionResult {
	fromAmount: number;
	fromCurrency: string;
	toAmount: number;
	toCurrency: string;
	exchangeRate: number;
	feeAmount?: number;
}
