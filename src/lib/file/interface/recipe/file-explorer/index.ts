import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFileExplorerEvents } from '$stylist/file/interface/behavior/file-explorer-events';
import type { SlotFileExplorer } from '$stylist/file/interface/slot/file-explorer';

export interface RecipeFileExplorer
	extends ComputeIntersectAll<[SlotFileExplorer, BehaviorFileExplorerEvents]> {}
