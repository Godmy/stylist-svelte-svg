import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotFileInput } from '$stylist/file/interface/slot/file-input';

export interface RecipeFileInput extends ComputeIntersectAll<[SlotFileInput]> {}
