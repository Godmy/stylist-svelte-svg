import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';

export type StickyLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	/** Прилипающий заголовок */
	header?: Snippet;
	/** Прилипающий футер */
	footer?: Snippet;
	/** Растягивает layout на всю высоту родителя */
	fillHeight?: boolean;
	/** Тень под заголовком */
	headerShadow?: boolean;
	/** Тень над футером */
	footerShadow?: boolean;
};
