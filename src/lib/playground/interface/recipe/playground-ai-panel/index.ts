import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundAiPanelProps as LegacyPlaygroundAiPanelProps1 } from '$stylist/playground/type/struct/playground-ai-panel-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundAiPanel
	extends ComputeIntersectAll<
		[LegacyPlaygroundAiPanelProps1, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	class?: string;
}
