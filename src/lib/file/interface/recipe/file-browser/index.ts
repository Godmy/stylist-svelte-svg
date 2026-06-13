import type { RestProps as LegacyFileBrowserProps2 } from '$stylist/file/type/struct/file-browser/props/rest-props';
import type { Props as LegacyFileBrowserProps1 } from '$stylist/file/type/struct/file-browser/props/-props';
import type { SlotFileBrowser as Slot } from '$stylist/file/interface/slot/file-browser';
import type { SlotFileBrowser as SlotFileBrowser } from '$stylist/file/interface/slot/file-browser';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFolderItem } from '$stylist/file/interface/slot/folder-item';
import type { BehaviorFileBrowserEvents } from '$stylist/file/interface/behavior/file-browser-events';

export interface RecipeFileBrowser
	extends StructIntersectAll<
		[
			LegacyFileBrowserProps2,
			LegacyFileBrowserProps1,
			Slot,
			SlotFileBrowser,
			BehaviorFileBrowserEvents
		]
	> {
	/** List of folder items */
	items: SlotFolderItem[];
	/** Show item count */
	showItemCount?: boolean;
	/** Enable selection */
	enableSelection?: boolean;
	/** Default expanded */
	defaultExpanded?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Item CSS class */
	itemClass?: string;
	/** Content CSS class */
	contentClass?: string;
}
