import type { SkeletonRectangleProps as LegacySkeletonRectangleProps1 } from '$stylist/notification/type/struct/skeleton-rectangle-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeSkeletonRectangle
	extends ComputeIntersectAll<[LegacySkeletonRectangleProps1, ISized, IShapeable, ISpaced]> {}
