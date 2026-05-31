import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

export interface SlotChatItem extends InteractionHTMLAttributes<HTMLDivElement> {
	chat: SlotChat;
	currentUser: SlotUser;
	isActive?: boolean;
}
