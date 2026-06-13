import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCalendar extends StructIntersectAll<[]> {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
}
