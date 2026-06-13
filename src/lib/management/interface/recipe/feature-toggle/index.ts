import type { SlotFeatureToggle as Slot } from '$stylist/management/interface/slot/feature-toggle';
import type { SlotFeatureToggle as SlotFeatureToggle } from '$stylist/management/interface/slot/feature-toggle';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFeatureToggle as FeatureToggleProps } from '$stylist/management/interface/slot/feature-toggle';

export interface RecipeFeatureToggle
	extends StructIntersectAll<[Slot, SlotFeatureToggle, FeatureToggleProps]> {}
