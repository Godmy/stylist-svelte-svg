import type { RealTimePresenceStatus } from '$stylist/calendar/type/struct/real-time-presence-status';

export interface SlotRealTimePresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: RealTimePresenceStatus;
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}
