import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
export interface ContractFavicon
	extends StructIntersectAll<
		[Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography, SlotContent]
	> {
	/** Size in pixels */
	size?: number;
	/** Favicon URL */
	url?: string;
	/** Slot content (fallback) */
	/** Additional CSS class */
	class?: string;
	/** Error state */
	error?: boolean;
	/** On error callback */
	onError?: () => void;
}
