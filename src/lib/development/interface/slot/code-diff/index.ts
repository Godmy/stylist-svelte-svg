import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface SlotCodeDiff extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	original?: string;
	modified?: string;
	language?: string;
	showLineNumbers?: boolean;
	class?: string;
	contentClass?: string;
	headerClass?: string;
}
