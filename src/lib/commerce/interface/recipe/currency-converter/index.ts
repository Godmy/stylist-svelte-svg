import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCurrency } from '$stylist/commerce/interface/slot/currency';
import type { SlotExchangeRate } from '$stylist/commerce/interface/slot/exchange-rate';
import type { BehaviorCurrencyConverterEvents } from '$stylist/commerce/interface/behavior/currency-converter-events';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';

export interface RecipeCurrencyConverter
	extends StructIntersectAll<[SlotTheme, BehaviorClickable, HTMLAttributes<HTMLDivElement>]>,
		BehaviorCurrencyConverterEvents {
	amount: number;

	fromCurrency: string;

	toCurrency: string;

	currencies: SlotCurrency[];

	exchangeRates: SlotExchangeRate;

	showInput?: boolean;

	showLabels?: boolean;

	showConversionRate?: boolean;

	showFeeEstimate?: boolean;

	feePercentage?: number;

	inputClass?: string;

	selectClass?: string;

	resultClass?: string;
}
