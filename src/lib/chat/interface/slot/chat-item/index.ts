import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

export interface SlotChatItem extends HTMLAttributes<HTMLDivElement>, SlotInteraction {
	chat: SlotChat;
	currentUser: SlotUser;
	isActive?: boolean;
}
