import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeCalendarEvent } from '$stylist/calendar/interface/recipe/calendar-event-event-calendar';

export interface RecipeCalendarDay extends StructIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: RecipeCalendarEvent[];
}
