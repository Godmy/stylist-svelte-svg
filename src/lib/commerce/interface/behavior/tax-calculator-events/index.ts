import type { SlotCalculationResult } from '$stylist/commerce/interface/slot/calculation-result';

export interface BehaviorTaxCalculatorEvents {
	onCalculate?: (result: SlotCalculationResult) => void;
}
