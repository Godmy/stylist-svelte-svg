import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTimeGridEvent } from '$stylist/calendar/interface/slot/time-grid-event';

export interface RecipeTimeGridExtendedTimeSlot extends ComputeIntersectAll<[]> {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: SlotTimeGridEvent[];
	hour: number;
	minute: number;
	time: string;
}
