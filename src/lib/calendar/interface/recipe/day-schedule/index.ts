import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotScheduleTimeSlot } from '$stylist/calendar/interface/slot/schedule-time-slot';

export interface RecipeDaySchedule extends ComputeIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: SlotScheduleTimeSlot[];
}
