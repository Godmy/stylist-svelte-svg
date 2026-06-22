import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundCanvasShellProps as LegacyPlaygroundCanvasShellProps1 } from '$stylist/playground/type/struct/playground-canvas-shell-props';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipePlaygroundCanvasShell
	extends ComputeIntersectAll<
		[
			LegacyPlaygroundCanvasShellProps1,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography,
			SlotChildren
		]
	> {
	class?: string;
}
