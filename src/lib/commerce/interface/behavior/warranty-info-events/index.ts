import type { SlotWarrantyClaim } from '$stylist/commerce/interface/slot/warranty-claim';

export interface BehaviorWarrantyInfoEvents {
	onClaimSubmit?: (claim: Omit<SlotWarrantyClaim, 'id' | 'date' | 'status'>) => void;
	onTermsClick?: () => void;
	onFileDownload?: () => void;
}
