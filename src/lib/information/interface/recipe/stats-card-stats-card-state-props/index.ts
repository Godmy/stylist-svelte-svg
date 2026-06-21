import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeStatsCard } from '$stylist/information/interface/recipe/stats-card';

export interface StatsCardStateProps extends ComputeIntersectAll<[RecipeStatsCard]> {
	class?: string;
}
