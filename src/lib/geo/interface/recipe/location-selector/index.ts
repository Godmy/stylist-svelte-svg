import type { LocationSelectorRestProps as LegacyLocationSelectorProps2 } from '$stylist/geo/type/struct/location-selector/locationselectorrest-props';
import type { LocationSelectorProps as LegacyLocationSelectorProps1 } from '$stylist/geo/type/struct/location-selector/locationselector-props';
import type { SlotLocationSelector as Slot } from '$stylist/geo/interface/slot/location-selector';
import type { SlotLocationSelector as SlotLocationSelector } from '$stylist/geo/interface/slot/location-selector';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LocationSelectorProps } from '$stylist/geo/type/struct/location-selector/locationselector-props';

export interface RecipeLocationSelector
	extends ComputeIntersectAll<
		[
			LegacyLocationSelectorProps2,
			LegacyLocationSelectorProps1,
			Slot,
			SlotLocationSelector,
			LocationSelectorProps
		]
	> {}
