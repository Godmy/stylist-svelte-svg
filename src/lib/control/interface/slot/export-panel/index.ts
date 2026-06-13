import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
// ExportPanel props interface
export interface SlotExportPanel extends StructIntersectAll<[SlotChildren]> {
	class?: string;
	onexport?: (
		event: CustomEvent<{
			format: 'png' | 'jpeg' | 'svg' | 'pdf';
			includeLegend: boolean;
			includeFilters: boolean;
		}>
	) => void;
	onExport?: (detail: {
		format: 'png' | 'jpeg' | 'svg' | 'pdf';
		includeLegend: boolean;
		includeFilters: boolean;
	}) => void;
}
