import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeTimeGridExtendedTimeSlot } from '$stylist/calendar/interface/recipe/time-grid-extended-time-slot';

export interface RecipeTimeGridDayTimeGrid extends StructIntersectAll<[]> {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: RecipeTimeGridExtendedTimeSlot[];
}
