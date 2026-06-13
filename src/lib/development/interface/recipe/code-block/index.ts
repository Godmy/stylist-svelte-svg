import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCodeBlock } from '$stylist/development/interface/slot/code-block';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeCodeBlock extends StructIntersectAll<[SlotCodeBlock, SlotTheme]> {}
