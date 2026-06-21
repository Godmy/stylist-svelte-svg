import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotRealTimePresenceUser } from '$stylist/calendar/interface/slot/real-time-presence-user';

export interface RecipeRealTimePresence extends ComputeIntersectAll<[]> {
	users: SlotRealTimePresenceUser[];
	showAvatars?: boolean;
	showStatus?: boolean;
	showLastSeen?: boolean;
	showCursorPositions?: boolean;
	title?: string;
	class?: string;
	userListClass?: string;
	userItemClass?: string;
	statusClass?: string;
}
