import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorZipViewerEvents } from '$stylist/file/interface/behavior/zip-viewer-events';
import type { SlotZipViewer } from '$stylist/file/interface/slot/zip-viewer';

export interface RecipeZipViewer
	extends ComputeIntersectAll<[SlotZipViewer, BehaviorZipViewerEvents, SlotChildren]> {}
