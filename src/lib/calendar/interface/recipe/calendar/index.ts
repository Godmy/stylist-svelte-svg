import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCalendar extends ComputeIntersectAll<[]> {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
}
