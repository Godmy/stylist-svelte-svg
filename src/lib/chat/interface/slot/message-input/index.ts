import type {
	HtmlAttributesBase
} from '$stylist/information/interface/slot';

export interface SlotMessageInput extends HtmlAttributesBase<HTMLDivElement> {
	disabled?: boolean;
	placeholder?: string;
	showAttachment?: boolean;
	showEmoji?: boolean;
	showSend?: boolean;
	onSendMessage?: (content: string) => void;
	onAttachClick?: () => void;
	onEmojiClick?: () => void;
	onMessageInput?: (content: string) => void;
}
