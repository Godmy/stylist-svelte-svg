import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotRfqFormData } from '$stylist/commerce/interface/slot/rfq-form-data';
import type { BehaviorRfqFormEvents } from '$stylist/commerce/interface/behavior/rfq-form-events';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeRfqForm
	extends StructIntersectAll<[SlotTheme, SlotLabel, SlotCaption, HTMLAttributes<HTMLDivElement>]>,
		BehaviorRfqFormEvents {
	formData?: SlotRfqFormData;

	currency?: string;

	locale?: string;

	showCompanyInfo?: boolean;

	showShippingAddress?: boolean;

	showProductList?: boolean;

	showAttachments?: boolean;

	showUrgentOption?: boolean;

	showDeliveryTerms?: boolean;

	showPaymentTerms?: boolean;

	showValidUntil?: boolean;

	maxProducts?: number;

	maxAttachments?: number;

	allowedFileTypes?: string[];

	maxFileSize?: number;

	formClass?: string;

	productListClass?: string;

	actionsClass?: string;
}
