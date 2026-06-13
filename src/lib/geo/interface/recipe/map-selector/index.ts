import type { MapSelectorRestProps as LegacyMapSelectorProps2 } from '$stylist/geo/type/struct/map-selector/mapselectorrest-props';
import type { MapSelectorProps as LegacyMapSelectorProps1 } from '$stylist/geo/type/struct/map-selector/mapselector-props';
import type { SlotMapSelector as Slot } from '$stylist/geo/interface/slot/map-selector';
import type { SlotMapSelector as SlotMapSelector } from '$stylist/geo/interface/slot/map-selector';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MapSelectorProps } from '$stylist/geo/type/struct/map-selector/mapselector-props';

export interface RecipeMapSelector
	extends StructIntersectAll<
		[LegacyMapSelectorProps2, LegacyMapSelectorProps1, Slot, SlotMapSelector, MapSelectorProps]
	> {}
