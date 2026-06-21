import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeCalendarEvent } from '$stylist/calendar/interface/recipe/calendar-event-event-calendar';

export interface RecipeCalendarDay extends ComputeIntersectAll<[]> {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: RecipeCalendarEvent[];
}
