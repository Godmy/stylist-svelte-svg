import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotStylist } from '$stylist/development/interface/slot/stylist';

export interface RecipeStylist extends ComputeIntersectAll<[SlotStylist]> {}
