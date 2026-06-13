import type { SlotFileExplorer as Slot } from '$stylist/file/interface/slot/file-explorer';
import type { SlotFileExplorer as SlotFileExplorer } from '$stylist/file/interface/slot/file-explorer';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFileSystemItem } from '$stylist/file/interface/slot/file-system-item';
import type { BehaviorFileExplorerEvents } from '$stylist/file/interface/behavior/file-explorer-events';
import type { ViewMode } from '$stylist/file/type/struct/file-explorer/view-mode';

export interface RecipeFileExplorer
	extends StructIntersectAll<[Slot, SlotFileExplorer, BehaviorFileExplorerEvents]> {
	items: SlotFileSystemItem[];
	viewMode?: ViewMode;
	currentPath?: string;
	searchable?: boolean;
	showPath?: boolean;
	enableSelection?: boolean;
	multiselect?: boolean;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	toolbarClass?: string;
	searchClass?: string;
	pathClass?: string;
}
