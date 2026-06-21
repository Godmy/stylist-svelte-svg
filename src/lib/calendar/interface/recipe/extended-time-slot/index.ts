import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface RecipeExtendedTimeSlot extends ComputeIntersectAll<[]> {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: SlotCalendarEvent[];
	hour: number;
	minute: number;
	time: string;
}
