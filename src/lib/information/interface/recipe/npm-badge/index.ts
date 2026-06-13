import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSoftwareBadge } from '$stylist/information/type/enum/software-badge';

export interface RecipeNpmBadge
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	type?: TokenSoftwareBadge;
	label?: string;
	value?: string;
	link?: string;
}
