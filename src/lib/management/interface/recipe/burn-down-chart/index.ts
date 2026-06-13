import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBurnDownData as BurnDownData } from '$stylist/management/interface/slot/burn-down-data';

export interface RecipeBurnDownChart extends StructIntersectAll<[]> {
	data: BurnDownData;
	width?: number;
	height?: number;
	title?: string;
}
