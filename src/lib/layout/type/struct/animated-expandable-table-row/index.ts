import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { Snippet } from 'svelte';

export type AnimatedExpandableTableRowProps = {
	expanded?: boolean;
	expandable?: boolean;
	expandIcon?: string;
	collapseIcon?: string;
	colspan?: number;
	children: Snippet;
	details: Snippet;
} & LayoutHTMLAttributes<HTMLTableRowElement>;
