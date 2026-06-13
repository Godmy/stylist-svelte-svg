import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCalendarViewEvent } from '$stylist/calendar/interface/slot/calendar-view-event';
import type { CalendarViewMode } from '$stylist/calendar/type/struct/calendar-view-mode';

export interface RecipeCalendarView extends StructIntersectAll<[SlotChildren]> {
	events?: SlotCalendarViewEvent[];
	initialDate?: Date;
	viewMode?: CalendarViewMode;
	showWeekNumbers?: boolean;
	weekendDays?: number[];
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: SlotCalendarViewEvent) => void;
	onDayClick?: (date: Date) => void;
	onEventCreate?: (date: Date) => void;
}
