import type { SlotTrackingEvent } from '$stylist/commerce/interface/slot/tracking-event';
import type { TrackingStatusType } from '$stylist/commerce/type/struct/tracking-status-type';

export interface SlotTrackingInfo {
	orderId: string;
	trackingNumber: string;
	carrier: string;
	estimatedDelivery: Date;
	status: TrackingStatusType;
	progress: number;
	events: SlotTrackingEvent[];
	recipientName?: string;
	recipientPhone?: string;
	shippingAddress: string;
	deliveryNotes?: string;
}
