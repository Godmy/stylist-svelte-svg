export interface BehaviorOrderHistoryEvents {
	onOrderRepeat?: (orderId: string) => void;
	onWriteReview?: (orderId: string) => void;
	onDownloadInvoice?: (orderId: string) => void;
	onReturnItem?: (orderId: string, itemId: string) => void;
}
