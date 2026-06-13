import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { ChatMessageStatus } from '$stylist/chat/type/struct/chat-message-status';

export interface SlotChatMessage
	extends StructIntersectAll<
		[Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>, SlotChildren]
	> {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: ChatMessageStatus;
	isOwn?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: 'default' | 'primary' | 'secondary';
}
