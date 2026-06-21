import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundAiAssistantProps as LegacyPlaygroundAiAssistantProps1 } from '$stylist/playground/type/struct/playground-ai-assistant-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundAiAssistant
	extends ComputeIntersectAll<
		[LegacyPlaygroundAiAssistantProps1, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	class?: string;
}
