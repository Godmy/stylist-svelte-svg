import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ResourceOptimizerResource } from '$stylist/development/type/struct/resource-optimizer-resource';
import type { ResourceOptimizerOptimizationSuggestion } from '$stylist/development/type/struct/resource-optimizer-optimization-suggestion';

export type ResourceOptimizerProps = {
	resources: ResourceOptimizerResource[];
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
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
