import type { SlotFileUpload as Slot } from '$stylist/file/interface/slot/file-upload';
import type { SlotFileUpload as SlotFileUpload } from '$stylist/file/interface/slot/file-upload';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFileUploadEvents } from '$stylist/file/interface/behavior/file-upload-events';
import type { UploadStatus } from '$stylist/file/type/struct/upload-status';

export interface RecipeFileUpload
	extends StructIntersectAll<[Slot, SlotFileUpload, BehaviorFileUploadEvents, SlotChildren]> {
	accept?: string;
	maxSize?: number;
	multiple?: boolean;
	status?: UploadStatus;
	file?: File | null;
	disabled?: boolean;
	uploadText?: string;
	class?: string;
}
