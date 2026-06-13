import type { SlotUploadProgress as Slot } from '$stylist/file/interface/slot/upload-progress';
import type { SlotUploadProgress as SlotUploadProgress } from '$stylist/file/interface/slot/upload-progress';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface RecipeUploadProgress extends StructIntersectAll<[Slot, SlotUploadProgress]> {
	class?: string;
}
