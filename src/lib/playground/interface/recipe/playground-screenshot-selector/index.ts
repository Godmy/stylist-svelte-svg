import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundScreenshotSelectorProps as LegacyPlaygroundScreenshotSelectorProps1 } from '$stylist/playground/type/struct/playground-screenshot-selector-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundScreenshotSelector
	extends ComputeIntersectAll<
		[
			LegacyPlaygroundScreenshotSelectorProps1,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	class?: string;
}
