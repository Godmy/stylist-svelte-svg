import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotLink as BaseLinkProps } from '$stylist/typography/interface/slot/link';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeLinkProps
	extends ComputeIntersectAll<[BaseLinkProps, HTMLAttributes<HTMLAnchorElement>, SlotInteraction]> {}
