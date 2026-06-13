import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';

export interface SlotClickable extends StructIntersectAll<[BehaviorClickable, SlotChildren]> {
	variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'link';
	class?: string;
}
