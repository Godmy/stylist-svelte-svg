import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface SlotScheduleCalendar {
	events?: SlotScheduleEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	showHeader?: boolean;
	showTimeGutter?: boolean;
	timeSlotHeight?: number;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onSlotClick?: (date: Date) => void;
	onEventClick?: (event: SlotScheduleEvent) => void;
}
