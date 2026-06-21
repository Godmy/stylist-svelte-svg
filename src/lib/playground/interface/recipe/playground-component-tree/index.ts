import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundComponentTreeProps as LegacyPlaygroundComponentTreeProps1 } from '$stylist/playground/type/struct/playground-component-tree-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundComponentTree
	extends ComputeIntersectAll<
		[LegacyPlaygroundComponentTreeProps1, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	class?: string;
}
