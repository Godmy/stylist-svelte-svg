import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeStatsCard } from '$stylist/information/interface/recipe/stats-card';

export interface StatsCardStateProps extends StructIntersectAll<[RecipeStatsCard]> {
	class?: string;
}
