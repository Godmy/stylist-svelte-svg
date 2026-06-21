import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export interface SlotAtomicPrinciplesShowcase
	extends Omit<HTMLAttributes<HTMLElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
	badgeText?: string;
	title?: string;
	description?: string;
	class?: string;
}
