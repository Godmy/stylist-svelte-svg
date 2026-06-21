import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCodeDiff } from '$stylist/development/interface/slot/code-diff';

export interface RecipeCodeDiff extends ComputeIntersectAll<[SlotCodeDiff]> {}
