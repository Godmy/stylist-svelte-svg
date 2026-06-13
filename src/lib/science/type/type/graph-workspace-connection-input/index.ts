import type { ScienceGraphWorkspaceConnection } from '$stylist/science/type/struct/graph-workspace-connection';

export type ScienceGraphWorkspaceConnectionInput =
	| readonly [string, string]
	| ScienceGraphWorkspaceConnection;
