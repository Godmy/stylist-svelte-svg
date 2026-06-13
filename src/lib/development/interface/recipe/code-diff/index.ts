import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCodeDiff } from '$stylist/development/interface/slot/code-diff';

export interface RecipeCodeDiff extends StructIntersectAll<[SlotCodeDiff]> {}
