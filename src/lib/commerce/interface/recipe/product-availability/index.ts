import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface RecipeProductAvailability
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	available?: boolean;
	stock?: number;
	location?: string;
	estimatedRestock?: string;
	onNotifyMe?: () => void;
	className?: string;
}
