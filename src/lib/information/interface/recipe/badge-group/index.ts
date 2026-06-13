import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BadgeGroupItem } from '$stylist/information/interface/slot/badge-group';

export interface RecipeBadgeGroup
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	badges?: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}
