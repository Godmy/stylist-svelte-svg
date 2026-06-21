import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ResourceOptimizerOptimizationSuggestion } from '$stylist/development/type/struct/resource-optimizer-optimization-suggestion';
import type { ResourceOptimizerResource } from '$stylist/development/type/struct/resource-optimizer-resource';

export interface SlotResourceOptimizer extends HTMLAttributes<HTMLElement>, BehaviorBorderToken, BehaviorTypography {
	resources?: ResourceOptimizerResource[];
	suggestions?: ResourceOptimizerOptimizationSuggestion[];
	showResourceDetails?: boolean;
	showOptimizationSuggestions?: boolean;
	showPrioritization?: boolean;
	showSizeComparison?: boolean;
	onResourceOptimize?: (resourceId: string) => void;
	onApplySuggestions?: () => void;
	title?: string;
	description?: string;
	class?: string;
}
