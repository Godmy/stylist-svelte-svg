import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotFileListItem } from '$stylist/file/interface/slot/file-list-item';

export interface RecipeFileListItem extends ComputeIntersectAll<[SlotFileListItem]> {}
