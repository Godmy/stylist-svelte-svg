import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMiniCalendarEvent } from '$stylist/calendar/interface/slot/mini-calendar-event';

export interface RecipeMiniCalendarDay extends ComputeIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected: boolean;
	hasEvent: boolean;
	events: SlotMiniCalendarEvent[];
}
