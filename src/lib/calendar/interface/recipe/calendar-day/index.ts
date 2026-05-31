import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface RecipeCalendarDay extends StructIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: SlotCalendarEvent[];
}
