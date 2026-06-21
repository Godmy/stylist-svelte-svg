import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ComponentLibraryStatsComponentStats } from '$stylist/development/type/struct/component-library-stats-component-stats';

export interface SlotComponentLibraryStats
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	stats: ComponentLibraryStatsComponentStats;
	sectionId?: string;
	animateOnVisible?: boolean;
	durationMs?: number;
	steps?: number;
	class?: string;
}
