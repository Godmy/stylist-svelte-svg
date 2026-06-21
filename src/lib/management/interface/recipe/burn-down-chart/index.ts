import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBurnDownData as BurnDownData } from '$stylist/management/interface/slot/burn-down-data';

export interface RecipeBurnDownChart extends ComputeIntersectAll<[]> {
	data: BurnDownData;
	width?: number;
	height?: number;
	title?: string;
}
