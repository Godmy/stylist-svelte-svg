import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCodeBlock } from '$stylist/development/interface/slot/code-block';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeCodeBlock extends ComputeIntersectAll<[SlotCodeBlock, SlotTheme]> {}
