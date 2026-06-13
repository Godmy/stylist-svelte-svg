import type { RestProps as LegacyZipViewerProps2 } from '$stylist/file/type/struct/zip-viewer/props/rest-props';
import type { Props as LegacyZipViewerProps1 } from '$stylist/file/type/struct/zip-viewer/props/-props';
import type { SlotZipViewer as Slot } from '$stylist/file/interface/slot/zip-viewer';
import type { SlotZipViewer as SlotZipViewer } from '$stylist/file/interface/slot/zip-viewer';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotZipEntry } from '$stylist/file/interface/slot/zip-entry';
import type { BehaviorZipViewerEvents } from '$stylist/file/interface/behavior/zip-viewer-events';

export interface RecipeZipViewer
	extends StructIntersectAll<
		[
			LegacyZipViewerProps2,
			LegacyZipViewerProps1,
			Slot,
			SlotZipViewer,
			BehaviorZipViewerEvents,
			SlotChildren
		]
	> {
	/** List of zip entries */
	entries: SlotZipEntry[];
	/** Archive name */
	archiveName?: string;
	/** Searchable */
	searchable?: boolean;
	/** Show path */
	showPath?: boolean;
	/** Enable filtering */
	enableFiltering?: boolean;
	/** Default expanded */
	defaultExpanded?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Children slot */
	/** Additional CSS class */
	class?: string;
	/** Entry CSS class */
	entryClass?: string;
	/** Header CSS class */
	headerClass?: string;
}
