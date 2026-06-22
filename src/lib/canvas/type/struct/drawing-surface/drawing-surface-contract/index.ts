import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type DrawingSurfaceContract = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
};
