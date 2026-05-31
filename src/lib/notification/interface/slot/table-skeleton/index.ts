import type {
	HtmlAttributesBase
} from '$stylist/information/interface/slot';

export interface SlotTableSkeleton extends HtmlAttributesBase<HTMLDivElement> {
	rows?: number;
	columns?: number;
}
