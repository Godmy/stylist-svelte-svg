import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotUploadProgress } from '$stylist/file/interface/slot/upload-progress';

export interface RecipeUploadProgress extends ComputeIntersectAll<[SlotUploadProgress]> {
	class?: string;
}
