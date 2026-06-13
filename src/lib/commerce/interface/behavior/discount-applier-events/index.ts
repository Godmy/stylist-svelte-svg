import type { SlotDiscountRule } from '$stylist/commerce/interface/slot/discount-rule';

export interface BehaviorDiscountApplierEvents {
	onApplyCode?: (code: string) => void;
	onApplyRule?: (rule: SlotDiscountRule) => void;
	onRemoveRule?: (ruleId: string) => void;
	onValidateCode?: (code: string) => Promise<boolean>;
}
