import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

export interface RecipePreziScene
	extends ComputeIntersectAll<[ArchitectureHTMLAttributes<HTMLDivElement>]> {
	nodes?: readonly SceneNode[];
	initialCamera?: {
		x: number;
		y: number;
		zoom: number;
	};
	initialDepth?: number;
	showGrid?: boolean;
	showMinimap?: boolean;
	showInspector?: boolean;
	showHeader?: boolean;
	title?: string;
	subtitle?: string;
	panMode?: 'drag' | 'space' | 'always';
	zoomEnabled?: boolean;
	panEnabled?: boolean;
	minZoom?: number;
	maxZoom?: number;
	animationDurationMs?: number;
	selectedNodeId?: string | null;
	onNodeSelect?: (node: SceneNode | null) => void;
	onCameraChange?: (camera: { x: number; y: number; zoom: number }) => void;
	onDepthChange?: (depth: number) => void;
}
