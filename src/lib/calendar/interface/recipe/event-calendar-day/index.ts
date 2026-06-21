import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotEventCalendarEvent } from '$stylist/calendar/interface/slot/event-calendar-event';

export interface RecipeEventCalendarDay extends ComputeIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: SlotEventCalendarEvent[];
}
