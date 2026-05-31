import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotTimeGridEvent } from '$stylist/calendar/interface/slot/time-grid-event';

export interface RecipeTimeGrid extends StructIntersectAll<[]> {
	events?: SlotTimeGridEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	timeStep?: number;
	showHeader?: boolean;
	showCurrentTimeIndicator?: boolean;
	showAllDayEvents?: boolean;
	class?: string;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: SlotTimeGridEvent) => void;
	onSlotClick?: (slotDate: Date) => void;
	children?: Snippet;
}
