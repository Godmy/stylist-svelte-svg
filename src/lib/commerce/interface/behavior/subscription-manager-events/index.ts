export interface BehaviorSubscriptionManagerEvents {
	onUpgrade?: () => void;
	onDowngrade?: () => void;
	onCancel?: () => void;
	onPause?: () => void;
	onResume?: () => void;
	onBillingChange?: () => void;
	onPaymentMethodChange?: () => void;
}
