import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorMotion } from '$stylist/animation/interface/behavior/motion';
import type { BehaviorTransform } from '$stylist/animation/interface/behavior/transform';
import type { SlotTransformable } from '$stylist/animation/interface/slot/transformable';

export interface RecipeTransformable
	extends ComputeIntersectAll<
		[
			SlotTheme,
			BehaviorMotion,
			BehaviorTransform,
			SlotTransformable,
			HTMLAttributes<HTMLDivElement>
		]
	> {}
