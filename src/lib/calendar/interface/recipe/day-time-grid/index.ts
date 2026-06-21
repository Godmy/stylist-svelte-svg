import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeExtendedTimeSlot } from '$stylist/calendar/interface/recipe/extended-time-slot';

export interface RecipeDayTimeGrid extends ComputeIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeExtendedTimeSlot[];
}
