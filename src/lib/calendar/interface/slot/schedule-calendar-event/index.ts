import type { TokenPriority } from '$stylist/calendar/type/enum/priority';
import type { SlotEventCalendarEvent } from '$stylist/calendar/interface/slot/event-calendar-event';

// ==================== ScheduleCalendar ====================
export interface SlotScheduleCalendarEvent extends SlotEventCalendarEvent {
	priority?: TokenPriority;
}
