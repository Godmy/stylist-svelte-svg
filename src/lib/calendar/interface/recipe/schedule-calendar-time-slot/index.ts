import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotScheduleCalendarEvent } from '$stylist/calendar/interface/slot/schedule-calendar-event';

export interface RecipeScheduleCalendarTimeSlot extends ComputeIntersectAll<[]> {
	time: string;
	hour: number;
	events: SlotScheduleCalendarEvent[];
}
