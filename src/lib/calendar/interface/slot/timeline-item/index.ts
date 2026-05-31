import type { Snippet } from 'svelte';
import type { TimelineStatus } from '$stylist/calendar/type/struct/timeline-status';

export interface SlotTimelineItem {
	id: string;
	title: string;
	content?: Snippet;
	date?: string;
	status?: TimelineStatus;
	icon?: Snippet;
}
