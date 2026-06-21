import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
export interface ContractAnnouncementBanner
	extends StructIntersectAll<
		[Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BehaviorBorderToken, BehaviorTypography, SlotChildren]
	> {
	/** Banner title */
	title?: string;
	/** Banner description */
	description?: string;
	/** Icon name */
	icon?: string;
	/** Slot content */
	/** Additional CSS class */
	class?: string;
}
