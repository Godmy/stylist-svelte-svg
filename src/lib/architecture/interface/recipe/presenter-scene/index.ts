import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { SceneCamera } from '$stylist/architecture/type/struct/scene-camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

export interface RecipePresenterScene
	extends ComputeIntersectAll<[ArchitectureHTMLAttributes<HTMLElement>]> {
	title?: string;
	camera?: Partial<SceneCamera>;
	nodes?: SceneNode[];
	showHeader?: boolean;
	showDepthControls?: boolean;
	showGrid?: boolean;
	showLinks?: boolean;
	showInspector?: boolean;
	onfocusnode?: (node: SceneNode) => void;
}
