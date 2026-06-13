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
