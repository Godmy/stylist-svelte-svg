import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
export interface SlotKanbanCard extends StructIntersectAll<[SlotChildren]> {
	card: Record<string, unknown>;
	draggable?: boolean;
	selected?: boolean;
	editable?: boolean;
	archivable?: boolean;
	deletable?: boolean;
	ondragstart?: (event: DragEvent) => void;
	ondragend?: (event: DragEvent) => void;
	onTitleChange?: (title: string) => void;
	onArchive?: () => void;
	onDelete?: () => void;
}
