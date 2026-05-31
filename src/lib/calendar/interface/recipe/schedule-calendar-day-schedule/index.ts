import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeScheduleCalendarTimeSlot } from '$stylist/calendar/interface/recipe/schedule-calendar-time-slot';

export interface RecipeScheduleCalendarDaySchedule extends StructIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeScheduleCalendarTimeSlot[];
}
