import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractAttachment } from '$stylist/file/interface/contract/attachment';
import type { BehaviorAttachmentPreviewEvents } from '$stylist/file/interface/behavior/attachment-preview-events';

export interface RecipeAttachmentPreview
	extends StructIntersectAll<[BehaviorAttachmentPreviewEvents]> {
	/** SlotAttachment data */
	attachment: ContractAttachment;
	/** Show actions */
	showActions?: boolean;
}
