import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { SlotGraphNode } from '$stylist/input/interface/slot/graph-node';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeInputGraphNode extends ComputeIntersectAll<[SlotGraphNode, SlotChildren]> {}