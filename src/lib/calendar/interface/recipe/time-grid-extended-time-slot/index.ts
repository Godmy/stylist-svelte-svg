import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTimeGridEvent } from '$stylist/calendar/interface/slot/time-grid-event';

export interface RecipeTimeGridExtendedTimeSlot extends StructIntersectAll<[]> {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: SlotTimeGridEvent[];
	hour: number;
	minute: number;
	time: string;
}
