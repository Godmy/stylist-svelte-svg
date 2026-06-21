import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTimeGridEvent } from '$stylist/calendar/interface/slot/time-grid-event';

export interface RecipeTimeGrid extends ComputeIntersectAll<[SlotChildren]> {
	events?: SlotTimeGridEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	timeStep?: number;
	showHeader?: boolean;
	showCurrentTimeIndicator?: boolean;
	showAllDayEvents?: boolean;
	class?: string;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: SlotTimeGridEvent) => void;
	onSlotClick?: (slotDate: Date) => void;
}
