import type { SlotFileListItem as Slot } from '$stylist/file/interface/slot/file-list-item';
import type { SlotFileListItem as SlotFileListItem } from '$stylist/file/interface/slot/file-list-item';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractFileItem } from '$stylist/file/interface/contract/file-item';
import type { BehaviorFileListItemEvents } from '$stylist/file/interface/behavior/file-list-item-events';

export interface RecipeFileListItem
	extends StructIntersectAll<[Slot, SlotFileListItem, BehaviorFileListItemEvents]> {
	item: ContractFileItem;
	showThumbnail?: boolean;
	showSize?: boolean;
	showModified?: boolean;
	showOwner?: boolean;
	enableSelection?: boolean;
	disabled?: boolean;
	variant?: 'default' | 'compact';
	class?: string;
	cellClass?: string;
}
