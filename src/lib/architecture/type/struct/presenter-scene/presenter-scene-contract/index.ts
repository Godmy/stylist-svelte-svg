import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { SceneCamera } from '$stylist/architecture/type/struct/scene-camera';
import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';

export type PresenterSceneContract = LayoutHTMLAttributes<HTMLElement> & {
	class?: string;
	title?: string;
	camera?: Partial<SceneCamera>;
	nodes?: SceneNode[];
	showHeader?: boolean;
	showDepthControls?: boolean;
	showGrid?: boolean;
	showLinks?: boolean;
	showInspector?: boolean;
	onfocusnode?: (node: SceneNode) => void;
};
