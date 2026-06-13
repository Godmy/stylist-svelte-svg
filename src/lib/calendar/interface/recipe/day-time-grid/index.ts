import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeExtendedTimeSlot } from '$stylist/calendar/interface/recipe/extended-time-slot';

export interface RecipeDayTimeGrid extends StructIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeExtendedTimeSlot[];
}
