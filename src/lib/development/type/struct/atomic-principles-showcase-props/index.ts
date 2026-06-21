import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { RecipeAtomicPrinciples } from '$stylist/information/interface/recipe/atomic-principles';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export type AtomicPrinciplesShowcaseProps = RecipeAtomicPrinciples &
	HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography & {
		/** Statistics data for atomic components */
		stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
		/** Badge text displayed at the top */
		badgeText?: string;
		/** Main section title */
		title?: string;
		/** Description text below the title */
		description?: string;
	};
