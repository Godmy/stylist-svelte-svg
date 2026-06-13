import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotAccessibilityToolbar } from '$stylist/control/interface/slot/accessibility-toolbar';

export interface RecipeAccessibilityToolbar
	extends StructIntersectAll<[SlotAccessibilityToolbar, SlotChildren]> {}
