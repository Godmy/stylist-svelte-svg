import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BadgeGroupItem } from '$stylist/information/interface/slot/badge-group';

export interface RecipeBadgeGroup
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	badges?: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}
