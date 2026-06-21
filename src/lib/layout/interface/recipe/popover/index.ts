import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { PopoverPosition } from '$stylist/layout/type/enum/popover-position';
import type { Snippet } from 'svelte';

export interface PopoverProps extends ComputeIntersectAll<[]> {
	title?: string;
	content: Snippet;
	trigger: Snippet;
	open?: boolean;
	position?: PopoverPosition;
	class?: string;
	id?: string;
}
