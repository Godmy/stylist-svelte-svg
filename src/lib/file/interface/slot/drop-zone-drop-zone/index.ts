import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';

export interface SlotDropZone extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	maxSize?: number;
	maxItems?: number;
	onDrop?: (items: SlotDropItem[]) => void;
	onDragOver?: (e: DragEvent) => void;
	onDragLeave?: (e: DragEvent) => void;
	onItemAdded?: (item: SlotDropItem) => void;
	onItemRemoved?: (item: SlotDropItem) => void;
	preview?: boolean;
	label?: string;
	description?: string;
}
