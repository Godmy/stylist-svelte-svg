import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

export interface SlotChatList {
	chats: SlotChat[];
	currentUser: SlotUser;
	activeChatId?: string;
}
