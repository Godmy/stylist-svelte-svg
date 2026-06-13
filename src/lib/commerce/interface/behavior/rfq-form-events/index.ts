import type { SlotRfqFormData } from '$stylist/commerce/interface/slot/rfq-form-data';

export interface BehaviorRfqFormEvents {
	onSubmit?: (data: SlotRfqFormData) => void;
	onProductAdd?: () => void;
	onProductRemove?: (productId: string) => void;
	onAttachmentChange?: (attachments: File[]) => void;
}
