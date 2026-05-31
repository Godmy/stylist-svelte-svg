import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';

export interface SlotMessageList {
	messages: SlotMessage[];
	currentUser: SlotUser;
	onMessageAction?: (action: string, message: SlotMessage) => void;
}
