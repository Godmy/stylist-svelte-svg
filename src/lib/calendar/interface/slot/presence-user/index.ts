import type { PresenceStatus } from '$stylist/calendar/type/struct/presence-status';

export interface SlotPresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: PresenceStatus;
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}
