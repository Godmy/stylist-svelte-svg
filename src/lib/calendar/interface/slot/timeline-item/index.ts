import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { Snippet } from 'svelte';
import type { TimelineStatus } from '$stylist/calendar/type/struct/timeline-status';

export interface SlotTimelineItem extends StructIntersectAll<[SlotContent]> {
	id: string;
	title: string;
	date?: string;
	status?: TimelineStatus;
	icon?: Snippet;
}
