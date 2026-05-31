import type { SlotScheduleEvent } from '$stylist/calendar/interface/slot/schedule-event';

export interface SlotScheduleTimeSlot {
	time: string;
	hour: number;
	events: SlotScheduleEvent[];
}
