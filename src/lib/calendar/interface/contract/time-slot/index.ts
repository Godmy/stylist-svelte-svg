import type { SlotTimeSlotEvent } from '$stylist/calendar/interface/slot/time-slot-event';

export interface ContractTimeSlot {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: SlotTimeSlotEvent[];
	class?: string;
	onValueInput?: (slot: ContractTimeSlot) => void;
	onValueChange?: (slot: ContractTimeSlot) => void;
	onClick?: (slot: ContractTimeSlot) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}
