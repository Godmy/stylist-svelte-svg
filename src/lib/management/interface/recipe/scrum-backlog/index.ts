import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBacklogData as BacklogData } from '$stylist/management/interface/slot/backlog-data';
import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';

export interface RecipeScrumBacklog extends ComputeIntersectAll<[]> {
	data: BacklogData;
	showFilters?: boolean;
	onItemAdd?: (item: BacklogItem) => void;
	onItemUpdate?: (item: BacklogItem) => void;
	onItemDelete?: (id: string) => void;
}
