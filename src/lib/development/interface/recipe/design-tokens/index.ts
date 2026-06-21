import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotDesignTokens } from '$stylist/development/interface/slot/design-tokens';

export interface RecipeDesignTokens extends ComputeIntersectAll<[SlotDesignTokens]> {}
