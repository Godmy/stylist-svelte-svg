import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundComponentInfoCardProps as LegacyPlaygroundComponentInfoCardProps1 } from '$stylist/playground/type/struct/playground-component-info-card-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundComponentInfoCard
	extends ComputeIntersectAll<
		[
			LegacyPlaygroundComponentInfoCardProps1,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	componentName?: string;
	description?: string;
	category?: string;
	status?: 'stable' | 'beta' | 'alpha' | 'deprecated';
	class?: string;
}
