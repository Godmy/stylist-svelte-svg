import type { SlotMapMarker as Slot } from '$stylist/geo/interface/slot/map-marker';
import type { SlotMapMarker as SlotMapMarker } from '$stylist/geo/interface/slot/map-marker';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotMapMarker as IMapMarkerProps } from '$stylist/geo/interface/slot/map-marker';

export interface RecipeMapMarker
	extends ComputeIntersectAll<[Slot, SlotMapMarker, IMapMarkerProps]> {
	class?: string;
}
