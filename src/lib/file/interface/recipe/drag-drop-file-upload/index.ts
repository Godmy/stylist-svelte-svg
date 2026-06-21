import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorDragDropFileUploadEvents } from '$stylist/file/interface/behavior/drag-drop-file-upload-events';
import type { SlotDragDropFileUpload } from '$stylist/file/interface/slot/drag-drop-file-upload';

export interface RecipeDragDropFileUpload
	extends ComputeIntersectAll<[SlotDragDropFileUpload, BehaviorDragDropFileUploadEvents]> {}
