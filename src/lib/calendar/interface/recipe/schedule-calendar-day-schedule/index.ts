import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeScheduleCalendarTimeSlot } from '$stylist/calendar/interface/recipe/schedule-calendar-time-slot';

export interface RecipeScheduleCalendarDaySchedule extends ComputeIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeScheduleCalendarTimeSlot[];
}
