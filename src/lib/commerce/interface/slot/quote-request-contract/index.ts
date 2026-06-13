import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';

export interface SlotQuoteRequestContract
	extends StructIntersectAll<[HTMLAttributes<HTMLDivElement>]> {}
