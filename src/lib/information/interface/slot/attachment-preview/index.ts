import type { SlotAttachment } from '$stylist/information/interface/slot/attachment';

export interface SlotAttachmentPreview {
	attachment: SlotAttachment;
	showActions?: boolean;
	class?: string;
}
