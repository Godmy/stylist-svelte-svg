import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundTreeNodeProps as LegacyPlaygroundTreeNodeProps1 } from '$stylist/playground/type/struct/playground-tree-node-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundTreeNode
	extends ComputeIntersectAll<
		[LegacyPlaygroundTreeNodeProps1, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	class?: string;
}
