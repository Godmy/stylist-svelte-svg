import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorLocationProto as ILocationProto } from '$stylist/geo/interface/behavior/location';

export interface RecipeIRoute extends ComputeIntersectAll<[]> {
	start: ILocationProto;
	end: ILocationProto;
	waypoints?: ILocationProto[];
	mode?: 'driving' | 'walking' | 'cycling' | 'transit';
	showOptions?: boolean;
	showDirections?: boolean;
	showMap?: boolean;
}
