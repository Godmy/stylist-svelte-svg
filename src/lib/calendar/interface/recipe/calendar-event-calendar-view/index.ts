import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeCalendarEvent extends StructIntersectAll<[]> {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
	location?: string;
	description?: string;
}
