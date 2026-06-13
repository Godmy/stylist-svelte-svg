import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
/**
 * RealTimePresence types and interfaces following SOLID principles
 */

export interface SlotRealTimePresence extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	users?: Array<{ id: string; name: string; status: 'online' | 'away' | 'offline' }>;
	onpresencechange?: (event: CustomEvent) => void;
}
