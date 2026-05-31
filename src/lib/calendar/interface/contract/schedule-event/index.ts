import type { TokenPriority } from '$stylist/calendar/type/enum/priority';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

export interface ContractScheduleEvent extends SlotCalendarEvent {
	priority?: TokenPriority;
}
