import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotDocumentationBlock } from '$stylist/development/interface/slot/documentation-block';

export interface RecipeDocumentationBlock
	extends StructIntersectAll<[SlotDocumentationBlock, SlotContent]> {}
