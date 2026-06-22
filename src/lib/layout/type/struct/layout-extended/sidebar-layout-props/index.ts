import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { SidebarLayoutGap } from '$stylist/layout/type/enum/sidebar-layout-gap';
import type { SidebarLayoutSide } from '$stylist/layout/type/enum/sidebar-layout-side';
import type { SidebarLayoutWidth } from '$stylist/layout/type/enum/sidebar-layout-width';

export type SidebarLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	sidebar: Snippet;
	children: Snippet;
	/** На какой стороне размещается сайдбар */
	side?: SidebarLayoutSide;
	/** Ширина сайдбара */
	sidebarWidth?: SidebarLayoutWidth;
	/** Промежуток между сайдбаром и основным контентом */
	gap?: SidebarLayoutGap;
	/** Схлопнуть сайдбар */
	collapsed?: boolean;
	/** Растягивает layout на всю высоту родителя */
	fillHeight?: boolean;
	/** Адаптивный режим: на мобильных — вертикальный, на lg+ — горизонтальный */
	responsive?: boolean;
	/** aria-label для <aside> элемента сайдбара (role="complementary") */
	sidebarLabel?: string;
};
