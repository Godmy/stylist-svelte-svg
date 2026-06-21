import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type SvgProps = HTMLAttributes<HTMLSpanElement> & BehaviorBorderToken & BehaviorTypography & {
	svg: string;
	size?: number | string;
	strokeWidth?: number;
	class?: string;
};
