import type { ScienceGraphWorkspaceNode } from '$stylist/science/type/struct/graph-workspace-node';
import type { ScienceGraphWorkspaceConnectionInput } from '$stylist/science/type/type/graph-workspace-connection-input';
import type { ScienceGraphWorkspaceBounds } from '$stylist/science/type/struct/graph-workspace-bounds';

export interface RecipeStylistGraphWorkspace {
	initialNodes?: readonly ScienceGraphWorkspaceNode[];
	initialConnections?: readonly ScienceGraphWorkspaceConnectionInput[];
	worldBounds?: ScienceGraphWorkspaceBounds;
}
