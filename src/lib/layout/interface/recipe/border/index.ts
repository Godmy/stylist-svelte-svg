import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeBorder
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>, SlotChildren]> {
	borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'bold' | 'none' | 'invisible';
	borderWidth?: string;
	borderColor?: string;
	borderRadius?: string;
	borderTop?: boolean;
	borderBottom?: boolean;
	borderLeft?: boolean;
	borderRight?: boolean;
	animated?: boolean;
}
