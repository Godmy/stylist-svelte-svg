import type { Props as LegacyDragDropFileUploadProps1 } from '$stylist/file/type/struct/drag-drop-file-upload/props';
import type { SlotDragDropFileUpload as Slot } from '$stylist/file/interface/slot/drag-drop-file-upload';
import type { SlotDragDropFileUpload as SlotDragDropFileUpload } from '$stylist/file/interface/slot/drag-drop-file-upload';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorDragDropFileUploadEvents } from '$stylist/file/interface/behavior/drag-drop-file-upload-events';

export interface RecipeDragDropFileUpload
	extends StructIntersectAll<
		[LegacyDragDropFileUploadProps1, Slot, SlotDragDropFileUpload, BehaviorDragDropFileUploadEvents]
	> {
	/** Multiple files allowed */
	multiple?: boolean;
	/** Accepted file types */
	accept?: string;
	/** Maximum file size */
	maxSize?: number;
	/** Disabled state */
	disabled?: boolean;
	/** Show preview */
	preview?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Drop zone CSS class */
	dropZoneClass?: string;
	/** File list CSS class */
	fileListClass?: string;
	/** File item CSS class */
	fileItemClass?: string;
	/** Button CSS class */
	buttonClass?: string;
}
