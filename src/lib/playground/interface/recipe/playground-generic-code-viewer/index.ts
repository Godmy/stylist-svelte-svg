import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundGenericCodeViewerProps as LegacyPlaygroundGenericCodeViewerProps1 } from '$stylist/playground/type/struct/playground-generic-code-viewer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundGenericCodeViewer
	extends ComputeIntersectAll<
		[
			LegacyPlaygroundGenericCodeViewerProps1,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	class?: string;
}
