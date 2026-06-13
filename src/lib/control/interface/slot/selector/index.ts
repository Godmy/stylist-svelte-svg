import type { SlotSelect } from '$stylist/control/interface/slot/select';

export interface SlotSelector extends SlotSelect {
	open?: boolean;
	onToggle?: () => void;
}
