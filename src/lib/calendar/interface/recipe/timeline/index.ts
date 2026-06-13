import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTimelineItem } from '$stylist/calendar/interface/slot/timeline-item';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeTimeline extends StructIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	items: SlotTimelineItem[];
	orientation?: 'vertical' | 'horizontal';
	class?: string;
	itemClass?: string;
	connectorClass?: string;
	iconClass?: string;
}
