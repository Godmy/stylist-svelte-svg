import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface RecipeScheduleTimeSlot extends StructIntersectAll<[]> {
	time: string;
	hour: number;
	events: SlotScheduleEvent[];
}
