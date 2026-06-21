import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotSidebar as SidebarProps } from '$stylist/navigation/interface/slot/sidebar';

export interface SidebarStateProps extends ComputeIntersectAll<[SidebarProps]> {
	class?: string;
}
