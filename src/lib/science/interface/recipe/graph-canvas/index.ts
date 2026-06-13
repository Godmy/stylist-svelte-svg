import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { GraphCanvasPosition } from '$stylist/science/type/struct/graph-canvas-position';

export interface RecipeGraphCanvas
	extends StructIntersectAll<[SlotTheme, ChildrenProp, HTMLAttributes<HTMLDivElement>]> {
	width?: number;
	height?: number;
	zoom?: number;
	offsetX?: number;
	offsetY?: number;
	gridSize?: number;
	gridMode?: string;
	gridColor?: string;
	backgroundColor?: string;
	snapToGrid?: boolean;
	minZoom?: number;
	maxZoom?: number;
	panMode?: 'drag' | 'space' | 'always';
	panEnabled?: boolean;
	zoomEnabled?: boolean;
	snapThreshold?: number;
	gridClass?: string;
	contentClass?: string;
	onzoomchange?: (zoom: number) => void;
	onoffsetchange?: (offset: GraphCanvasPosition) => void;
	onpanstart?: (event: MouseEvent) => void;
	onpan?: (event: MouseEvent) => void;
	onpanend?: (event: MouseEvent) => void;
	oncanvasclick?: (event: MouseEvent) => void;
}
