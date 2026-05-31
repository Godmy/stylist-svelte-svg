import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type {
	LocationPickerProps
} from '$stylist/geo/type/struct/location-picker';

export interface LocationPickerStateProps extends StructIntersectAll<[LocationPickerProps]> {}
