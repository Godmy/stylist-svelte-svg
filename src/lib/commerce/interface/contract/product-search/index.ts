import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorProductSearchEvents } from '$stylist/commerce/interface/behavior/product-search-events';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface ContractProductSearch
	extends StructIntersectAll<[SlotLabel, HTMLAttributes<HTMLDivElement>]>,
		BehaviorProductSearchEvents {
	suggestions?: string[];
}
