import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTimelineItem } from '$stylist/calendar/interface/slot/timeline-item';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeTimeline extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	items: SlotTimelineItem[];
	orientation?: 'vertical' | 'horizontal';
	class?: string;
	itemClass?: string;
	connectorClass?: string;
	iconClass?: string;
}
