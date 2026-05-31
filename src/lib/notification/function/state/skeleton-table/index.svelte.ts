import { SkeletonTableStyleManager } from '$stylist/notification/class/style-manager/skeleton-table';
import type { SkeletonTableProps } from '$stylist/notification/type/struct/skeleton-table-props';

export function createSkeletonTableState(props: SkeletonTableProps) {
	const rows = $derived(props.rows ?? 5);
	const columns = $derived(props.columns ?? 4);

	const columnIndexes = $derived(Array.from({ length: columns }, (_, index) => index));
	const containerClass = $derived(SkeletonTableStyleManager.container(props.class));
	const dataBarStyle = $derived(SkeletonTableStyleManager.bar('120px'));
	const dataCellClass = $derived(SkeletonTableStyleManager.dataCell());
	const headerBarStyle = $derived(SkeletonTableStyleManager.bar('80px'));
	const headerCellClass = $derived(SkeletonTableStyleManager.headerCell());
	const headerClass = $derived(SkeletonTableStyleManager.header());
	const restProps = $derived.by(() => {
		const { class: _class, rows: _rows, columns: _columns, ...rest } = props;
		return rest;
	});
	const rowIndexes = $derived(Array.from({ length: rows }, (_, index) => index));
	const tableClass = $derived(SkeletonTableStyleManager.table());

	return {
		get columnIndexes() {
			return columnIndexes;
		},
		get containerClass() {
			return containerClass;
		},
		get dataBarStyle() {
			return dataBarStyle;
		},
		get dataCellClass() {
			return dataCellClass;
		},
		get headerBarStyle() {
			return headerBarStyle;
		},
		get headerCellClass() {
			return headerCellClass;
		},
		get headerClass() {
			return headerClass;
		},
		get restProps() {
			return restProps;
		},
		get rowIndexes() {
			return rowIndexes;
		},
		get tableClass() {
			return tableClass;
		}
	};
}

export default createSkeletonTableState;
