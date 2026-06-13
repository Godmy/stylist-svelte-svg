import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
// ==================== AiResultCard ====================
export interface RecipeAiResultCard extends StructIntersectAll<[SlotChildren]> {
	title?: string;
	description?: string;
	icon?: string;
	class?: string;
}
