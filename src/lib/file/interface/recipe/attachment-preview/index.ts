import type { Props as LegacyAttachmentPreviewProps1 } from '$stylist/file/type/struct/attachment-preview/props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractAttachment } from '$stylist/file/interface/contract/attachment';
import type { BehaviorAttachmentPreviewEvents } from '$stylist/file/interface/behavior/attachment-preview-events';

export interface RecipeAttachmentPreview
	extends StructIntersectAll<[LegacyAttachmentPreviewProps1, BehaviorAttachmentPreviewEvents]> {
	/** SlotAttachment data */
	attachment: ContractAttachment;
	/** Show actions */
	showActions?: boolean;
}
