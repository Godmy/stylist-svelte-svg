import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMiniCalendarEvent } from '$stylist/calendar/interface/slot/mini-calendar-event';

export interface RecipeMiniCalendar extends StructIntersectAll<[]> {
	selectedDate?: Date;
	events?: SlotMiniCalendarEvent[];
	initialDate?: Date;
	compact?: boolean;
	showToday?: boolean;
	showWeekNumbers?: boolean;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onDateSelect?: (date: Date) => void;
	onEventClick?: (event: SlotMiniCalendarEvent) => void;
}
