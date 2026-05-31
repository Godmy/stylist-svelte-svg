import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCalendarViewEvent } from '$stylist/calendar/interface/slot/calendar-view-event';

export interface RecipeCalendarViewDay extends StructIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	events: SlotCalendarViewEvent[];
}
