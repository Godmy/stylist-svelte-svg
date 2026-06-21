import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export interface ContractImageWithCaption
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
	/** Image source */
	src?: string;
	/** Alt text */
	alt?: string;
	/** Caption text */
	caption?: string;
	/** Image width */
	width?: string;
	/** Image height */
	height?: string;
	/** Image CSS class */
	imageClass?: string;
	/** Caption CSS class */
	captionClass?: string;
	/** Rounded corners */
	rounded?: boolean;
	/** Bordered */
	bordered?: boolean;
	/** Shadow */
	shadow?: boolean;
	/** Loading mode */
	loading?: 'lazy' | 'eager';
	/** Additional CSS class */
	class?: string;
}
