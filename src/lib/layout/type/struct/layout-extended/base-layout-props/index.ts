import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type BaseLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	gap?: string | number;
	align?: string;
	justify?: string;
	alignItems?: string;
	justifyContent?: string;
	fillHeight?: boolean;
};
