import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import type { SlotEventCalendarEvent } from '$stylist/calendar/interface/slot/event-calendar-event';

export interface RecipeEventCalendar extends StructIntersectAll<[SlotChildren]> {
	events?: SlotEventCalendarEvent[];
	initialDate?: Date;
	viewMode?: TokenTimeMeasure;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: SlotEventCalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: SlotEventCalendarEvent) => void;
	onEventDelete?: (event: SlotEventCalendarEvent) => void;
}
