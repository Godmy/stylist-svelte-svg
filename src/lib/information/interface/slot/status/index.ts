import type { StatusSeverity } from '$stylist/information/type/struct/status-severity';
import type { StatusState } from '$stylist/information/type/struct/status-state';

export interface SlotStatus {
	status?: string;
	severity?: StatusSeverity;
	state?: StatusState;
}
