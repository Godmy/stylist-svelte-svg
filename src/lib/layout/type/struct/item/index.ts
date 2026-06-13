import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutLevel } from '$stylist/layout/type/struct/item-layout-level';
import type { LayoutShape } from '$stylist/layout/type/struct/item-layout-shape';
import type { LayoutGravity } from '$stylist/layout/type/struct/item-layout-gravity';

export type LayoutHTMLAttributes<T extends HTMLElement = HTMLDivElement> = HTMLAttributes<T> & {
	layoutLevel?: LayoutLevel;
	layoutShape?: LayoutShape;
	layoutGravity?: LayoutGravity;
	layoutMargin?: string;
	layoutPadding?: string;
	layoutElevation?: number;
	layoutGutter?: string;
	layoutAnchor?: string;
};
