import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeAiResultCard extends ComputeIntersectAll<[SlotChildren]> {
	title?: string;
	description?: string;
	icon?: string;
	class?: string;
}
