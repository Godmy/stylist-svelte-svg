import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotEventCalendarEvent } from '$stylist/calendar/interface/slot/event-calendar-event';

export interface RecipeEventCalendarDay extends StructIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: SlotEventCalendarEvent[];
}
