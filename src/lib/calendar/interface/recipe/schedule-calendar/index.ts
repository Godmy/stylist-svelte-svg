import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotScheduleCalendarEvent } from '$stylist/calendar/interface/slot/schedule-calendar-event';

export interface RecipeScheduleCalendar extends ComputeIntersectAll<[SlotChildren]> {
	events?: SlotScheduleCalendarEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	showHeader?: boolean;
	showTimeGutter?: boolean;
	timeSlotHeight?: number;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onSlotClick?: (date: Date) => void;
	onEventClick?: (event: SlotScheduleCalendarEvent) => void;
}
