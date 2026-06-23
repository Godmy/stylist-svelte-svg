import type { SlotAttachment } from '$stylist/information/interface/slot/attachment';

export interface BehaviorAttachmentPreviewEvents {
	onDownload?: (attachment: SlotAttachment) => void;
	onRemove?: (attachment: SlotAttachment) => void;
}
