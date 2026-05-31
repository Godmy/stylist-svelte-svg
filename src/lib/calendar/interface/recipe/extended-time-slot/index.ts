import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface RecipeExtendedTimeSlot extends StructIntersectAll<[]> {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: SlotCalendarEvent[];
	hour: number;
	minute: number;
	time: string;
}
