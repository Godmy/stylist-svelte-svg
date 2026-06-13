import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
/**
 * MessageMeta types and interfaces following SOLID principles
 */

export interface SlotMessageMeta extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	timestamp?: string;
	sender?: string;
	status?: 'sent' | 'delivered' | 'read';
}
