import type { SlotCardSkeleton as Slot } from '$stylist/notification/interface/slot/card-skeleton';
import type { SlotCardSkeleton as SlotCardSkeleton } from '$stylist/notification/interface/slot/card-skeleton';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorShapeable as IShapeable } from '$stylist/layout/interface/behavior/shapeable';
import type { BehaviorSized as ISized } from '$stylist/layout/interface/behavior/sized';
import type { BehaviorSpaced as ISpaced } from '$stylist/layout/interface/behavior/spaced';

export interface RecipeCardSkeleton
	extends StructIntersectAll<[Slot, SlotCardSkeleton, ISized, IShapeable, ISpaced, IElevatable]> {}
