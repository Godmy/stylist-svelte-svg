import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCalendarViewEvent } from '$stylist/calendar/interface/slot/calendar-view-event';

export interface RecipeCalendarViewDay extends ComputeIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	events: SlotCalendarViewEvent[];
}
