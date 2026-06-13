import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMiniCalendarEvent } from '$stylist/calendar/interface/slot/mini-calendar-event';

export interface RecipeMiniCalendarDay extends StructIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected: boolean;
	hasEvent: boolean;
	events: SlotMiniCalendarEvent[];
}
