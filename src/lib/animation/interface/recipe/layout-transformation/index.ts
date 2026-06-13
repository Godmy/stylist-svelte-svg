import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorMotion } from '$stylist/animation/interface/behavior/motion';
import type { BehaviorTransform } from '$stylist/animation/interface/behavior/transform';
import type { SlotTransformation } from '$stylist/animation/interface/slot/transformation';

export interface RecipeLayoutTransformation
	extends StructIntersectAll<
		[BehaviorMotion, BehaviorTransform, SlotChildren, SlotTransformation]
	> {}
