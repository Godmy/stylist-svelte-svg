import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorAttachmentPreviewEvents } from '$stylist/information/interface/behavior/attachment-preview-events';
import type { SlotAttachmentPreview } from '$stylist/information/interface/slot/attachment-preview';

export interface RecipeAttachmentPreview
	extends ComputeIntersectAll<[SlotAttachmentPreview, BehaviorAttachmentPreviewEvents]> {}
