import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotScheduleCalendarEvent } from '$stylist/calendar/interface/slot/schedule-calendar-event';

export interface RecipeScheduleCalendarTimeSlot extends StructIntersectAll<[]> {
	time: string;
	hour: number;
	events: SlotScheduleCalendarEvent[];
}
