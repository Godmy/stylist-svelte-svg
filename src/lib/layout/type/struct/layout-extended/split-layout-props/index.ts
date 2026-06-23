import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/enum/orientation';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { SplitLayoutPanelSize } from '$stylist/layout/type/enum/split-layout-panel-size';

export type SplitLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	primary: Snippet;
	secondary: Snippet;
	gap?: SplitLayoutGap;
	direction?: (typeof TOKEN_ORIENTATION)[number];
	primarySize?: SplitLayoutPanelSize;
	secondarySize?: SplitLayoutPanelSize;
	responsive?: boolean;
};
