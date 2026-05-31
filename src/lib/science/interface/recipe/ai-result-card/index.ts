import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';

// ==================== AiResultCard ====================
export interface RecipeAiResultCard extends StructIntersectAll<[]> {
	children?: Snippet;
	title?: string;
	description?: string;
	icon?: string;
	class?: string;
}
