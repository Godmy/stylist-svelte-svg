import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractVideoPlayer
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** Video source */
	src?: string;
	/** Poster image */
	poster?: string;
	/** Show controls */
	showControls?: boolean;
	/** Auto play */
	autoPlay?: boolean;
	/** Loop */
	loop?: boolean;
	/** Muted */
	muted?: boolean;
	/** Additional CSS class */
	class?: string;
}
