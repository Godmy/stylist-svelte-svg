import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type SpacerProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	size?: number;
	axis?: 'horizontal' | 'vertical' | 'both';
	inline?: boolean;
};
