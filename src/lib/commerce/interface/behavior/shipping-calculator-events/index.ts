import type { SlotShippingOption } from '$stylist/commerce/interface/slot/shipping-option';

export interface BehaviorShippingCalculatorEvents {
	onCalculate?: (options: SlotShippingOption[]) => void;
	onOptionSelect?: (option: SlotShippingOption) => void;
}
