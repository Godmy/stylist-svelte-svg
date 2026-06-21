import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotGeoJSONViewer as IGeoJSONViewerProps } from '$stylist/geo/interface/slot/geo-json-viewer';

export interface GeoJSONViewerStateProps extends ComputeIntersectAll<[IGeoJSONViewerProps]> {
	class?: string;
	mapClass?: string;
}
