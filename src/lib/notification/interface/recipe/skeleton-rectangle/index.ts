import type { SkeletonRectangleProps as LegacySkeletonRectangleProps1 } from '$stylist/notification/type/struct/skeleton-rectangle-props';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeSkeletonRectangle
	extends StructIntersectAll<[LegacySkeletonRectangleProps1, ISized, IShapeable, ISpaced]> {}
