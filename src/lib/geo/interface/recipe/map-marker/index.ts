import type { SlotMapMarker as Slot } from '$stylist/geo/interface/slot/map-marker';
import type { SlotMapMarker as SlotMapMarker } from '$stylist/geo/interface/slot/map-marker';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMapMarker as IMapMarkerProps } from '$stylist/geo/interface/slot/map-marker';

export interface RecipeMapMarker
	extends StructIntersectAll<[Slot, SlotMapMarker, IMapMarkerProps]> {
	class?: string;
}
