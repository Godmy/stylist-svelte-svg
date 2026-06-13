import type { RecipeSkeletonTable } from '$stylist/notification/interface/recipe/skeleton-table';

export function createSkeletonTableState(props: RecipeSkeletonTable) {
	const rows = $derived(props.rows ?? 5);
	const columns = $derived(props.columns ?? 4);

	const columnIndexes = $derived(Array.from({ length: columns }, (_, index) => index));
	const containerClass = $derived(`skeleton-table ${props.class ?? ''}`.trim());
	const dataBarStyle = $derived('width: 120px');
	const dataCellClass = $derived('skeleton-table__cell');
	const headerBarStyle = $derived('width: 80px');
	const headerCellClass = $derived('skeleton-table__header-cell');
	const headerClass = $derived('skeleton-table__header');
	const restProps = $derived.by(() => {
		const { class: _class, rows: _rows, columns: _columns, ...rest } = props;
		return rest;
	});
	const rowIndexes = $derived(Array.from({ length: rows }, (_, index) => index));
	const tableClass = $derived('skeleton-table__table');

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
