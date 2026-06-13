import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotComponentPreview } from '$stylist/development/interface/slot/component-preview';

export interface RecipeComponentPreview extends StructIntersectAll<[SlotComponentPreview]> {}
