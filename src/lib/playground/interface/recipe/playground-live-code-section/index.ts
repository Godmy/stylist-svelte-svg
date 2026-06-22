import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundLiveCodeSectionProps as LegacyPlaygroundLiveCodeSectionProps1 } from '$stylist/playground/type/struct/playground-live-code-section-props';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipePlaygroundLiveCodeSection
	extends ComputeIntersectAll<
		[
			LegacyPlaygroundLiveCodeSectionProps1,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography,
			SlotChildren
		]
	> {
	class?: string;
}
