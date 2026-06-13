import type { TrackingStatusType } from '$stylist/commerce/type/struct/tracking-status-type';

export interface SlotTrackingEvent {
	id: string;
	status: TrackingStatusType;
	timestamp: Date;
	location?: string;
	description: string;
	notes?: string;
}
