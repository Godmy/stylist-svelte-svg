import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTaxRate } from '$stylist/commerce/interface/slot/tax-rate';
import type { SlotLocation } from '$stylist/commerce/interface/slot/location';
import type { BehaviorTaxCalculatorEvents } from '$stylist/commerce/interface/behavior/tax-calculator-events';

export interface RecipeTaxCalculator
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]>,
		BehaviorTaxCalculatorEvents {
	locations: SlotLocation[];

	taxRates?: SlotTaxRate[];

	defaultLocation?: string;

	defaultTaxRates?: string[];

	defaultAmount?: number;

	defaultIncludeTax?: boolean;

	currency?: string;

	locale?: string;

	showLocationSelector?: boolean;

	showTaxRateSelector?: boolean;

	showIncludeTaxToggle?: boolean;

	formClass?: string;

	resultClass?: string;
}
