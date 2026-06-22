import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { GridMoleculeAlign } from '$stylist/layout/type/enum/grid-molecule-align';
import type { GridMoleculeGap } from '$stylist/layout/type/enum/grid-molecule-gap';
import type { GridMoleculeJustify } from '$stylist/layout/type/enum/grid-molecule-justify';

export type GridMoleculeProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	cols?: number;
	gap?: GridMoleculeGap;
	responsive?: boolean;
	alignItems?: GridMoleculeAlign;
	justifyContent?: GridMoleculeJustify;
};
