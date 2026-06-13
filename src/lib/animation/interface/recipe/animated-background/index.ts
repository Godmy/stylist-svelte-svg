import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeAnimatedBackground
	extends StructIntersectAll<[SlotChildren, SlotClass, SlotTheme]> {}
