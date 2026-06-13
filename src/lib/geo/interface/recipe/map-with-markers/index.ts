import type { MapWithMarkersRestProps as LegacyMapWithMarkersProps2 } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkersrest-props';
import type { MapWithMarkersProps as LegacyMapWithMarkersProps1 } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkers-props';
import type { SlotMapWithMarkers as Slot } from '$stylist/geo/interface/slot/map-with-markers';
import type { SlotMapWithMarkers as SlotMapWithMarkers } from '$stylist/geo/interface/slot/map-with-markers';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { MapWithMarkersProps } from '$stylist/geo/type/struct/map-with-markers/mapwithmarkers-props';

export interface RecipeMapWithMarkers
	extends StructIntersectAll<
		[
			LegacyMapWithMarkersProps2,
			LegacyMapWithMarkersProps1,
			Slot,
			SlotMapWithMarkers,
			MapWithMarkersProps
		]
	> {}
