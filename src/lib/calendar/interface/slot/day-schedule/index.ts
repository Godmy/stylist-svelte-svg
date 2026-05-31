import type { SlotScheduleTimeSlot } from '$stylist/calendar/interface/slot/schedule-time-slot';

export interface SlotDaySchedule {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: SlotScheduleTimeSlot[];
}
