import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';

// DropZone props interface
export interface SlotDropZone extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	maxSize?: number; // in bytes
	maxItems?: number;
	onDrop?: (items: SlotDropItem[]) => void;
	onDragOver?: (items: DragEvent) => void;
	onDragLeave?: (items: DragEvent) => void;
	onItemAdded?: (item: SlotDropItem) => void;
	onItemRemoved?: (item: SlotDropItem) => void;
	preview?: boolean;
	label?: string;
	description?: string;
}
