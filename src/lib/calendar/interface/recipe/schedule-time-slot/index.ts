import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface RecipeScheduleTimeSlot extends ComputeIntersectAll<[]> {
	time: string;
	hour: number;
	events: SlotScheduleEvent[];
}
