import type { SlotUpsellProduct } from '$stylist/commerce/interface/slot/upsell-product';

export interface BehaviorUpsellEvents {
	onProductUpgrade?: (product: SlotUpsellProduct) => void;
	onProductAddToCart?: (product: SlotUpsellProduct) => void;
}
