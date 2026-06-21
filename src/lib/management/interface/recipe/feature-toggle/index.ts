import type { SlotFeatureToggle as Slot } from '$stylist/management/interface/slot/feature-toggle';
import type { SlotFeatureToggle as SlotFeatureToggle } from '$stylist/management/interface/slot/feature-toggle';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotFeatureToggle as FeatureToggleProps } from '$stylist/management/interface/slot/feature-toggle';

export interface RecipeFeatureToggle
	extends ComputeIntersectAll<[Slot, SlotFeatureToggle, FeatureToggleProps]> {}
