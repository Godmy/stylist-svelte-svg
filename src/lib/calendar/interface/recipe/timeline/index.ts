import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTimelineItem } from '$stylist/calendar/interface/slot/timeline-item';

export interface RecipeTimeline extends StructIntersectAll<[]> {
	items: SlotTimelineItem[];
	orientation?: 'vertical' | 'horizontal';
	class?: string;
	itemClass?: string;
	connectorClass?: string;
	iconClass?: string;
}
