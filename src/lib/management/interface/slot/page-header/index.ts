import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export interface SlotPageHeader extends LayoutHTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
}
