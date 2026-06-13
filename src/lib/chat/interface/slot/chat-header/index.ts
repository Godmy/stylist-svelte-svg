import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

// ChatHeader props interface
export interface SlotChatHeader
	extends StructIntersectAll<[InteractionHTMLAttributes<HTMLDivElement>, SlotChildren]> {
	chat: SlotChat;
	currentUser: SlotUser;
	showActions?: boolean;
	class?: string;
}
