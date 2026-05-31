import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotScheduleTimeSlot } from '$stylist/calendar/interface/slot/schedule-time-slot';

export interface RecipeDaySchedule extends StructIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: SlotScheduleTimeSlot[];
}
