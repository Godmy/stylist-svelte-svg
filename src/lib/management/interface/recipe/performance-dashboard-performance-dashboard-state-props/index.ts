import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipePerformanceDashboard } from '$stylist/management/interface/recipe/performance-dashboard';

export interface PerformanceDashboardStateProps
	extends StructIntersectAll<[RecipePerformanceDashboard]> {}
