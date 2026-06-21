import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorFileBrowserEvents } from '$stylist/file/interface/behavior/file-browser-events';
import type { SlotFileBrowser } from '$stylist/file/interface/slot/file-browser';

export interface RecipeFileBrowser
	extends ComputeIntersectAll<[SlotFileBrowser, BehaviorFileBrowserEvents]> {}
