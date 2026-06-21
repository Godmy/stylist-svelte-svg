import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundCodeViewerProps as LegacyPlaygroundCodeViewerProps1 } from '$stylist/playground/type/struct/playground-code-viewer-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundCodeViewer
	extends ComputeIntersectAll<
		[LegacyPlaygroundCodeViewerProps1, Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	code?: string;
	language?: string;
	readonly?: boolean;
	class?: string;
}
