import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCalendarViewEvent } from '$stylist/calendar/interface/slot/calendar-view-event';

import type { TOKEN_CALENDAR } from '$stylist/calendar/const/enum/time-measure/calendar-enum';
export interface RecipeCalendarView extends ComputeIntersectAll<[SlotChildren]> {
	events?: SlotCalendarViewEvent[];
	initialDate?: Date;
	viewMode?: (typeof TOKEN_CALENDAR)[number];
	showWeekNumbers?: boolean;
	weekendDays?: number[];
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: SlotCalendarViewEvent) => void;
	onDayClick?: (date: Date) => void;
	onEventCreate?: (date: Date) => void;
}
