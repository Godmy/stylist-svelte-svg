import type { SlotRfqProduct } from '$stylist/commerce/interface/slot/rfq-product';

export interface SlotRfqFormData {
	requesterName: string;
	requesterEmail: string;
	requesterPhone?: string;
	companyName?: string;
	companyAddress?: string;
	shippingAddress?: string;
	products: SlotRfqProduct[];
	message: string;
	urgent?: boolean;
	validUntil?: Date;
	deliveryTerms?: string;
	paymentTerms?: string;
	currency?: string;
	attachments: File[];
}
