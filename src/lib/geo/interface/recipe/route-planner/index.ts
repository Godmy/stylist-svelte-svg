import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RoutePlannerProps } from '$stylist/geo/type/struct/route-planner/routeplanner-props';

export interface RoutePlannerStateProps extends ComputeIntersectAll<[RoutePlannerProps]> {}
