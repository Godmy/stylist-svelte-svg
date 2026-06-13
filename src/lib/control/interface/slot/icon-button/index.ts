import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { Snippet } from 'svelte';
import type { Props } from '$stylist/information/type/struct/props';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotIconButton
	extends StructIntersectAll<[Omit<Props, 'children' | 'icon'>, SlotButtonDom, SlotChildren]> {
	class?: string;
	icon?: string | Snippet;
}
