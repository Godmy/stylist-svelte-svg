import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeTimeGridExtendedTimeSlot } from '$stylist/calendar/interface/recipe/time-grid-extended-time-slot';

export interface RecipeTimeGridDayTimeGrid extends ComputeIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeTimeGridExtendedTimeSlot[];
}
