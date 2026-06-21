import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PlaygroundEnhancedExportPanelProps as LegacyPlaygroundEnhancedExportPanelProps1 } from '$stylist/playground/type/struct/playground-enhanced-export-panel-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePlaygroundEnhancedExportPanel
	extends ComputeIntersectAll<
		[
			LegacyPlaygroundEnhancedExportPanelProps1,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography
		]
	> {
	class?: string;
}
