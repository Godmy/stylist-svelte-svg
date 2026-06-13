import type { RecipeTable as RecipeTable } from '$stylist/information/interface/recipe/table';
import { ObjectManagerTable } from '$stylist/information/class/object-manager/table';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { TABLE_CLASSES } from '$stylist/information/const/record/table-classes';

export function createTableState(props: RecipeTable) {
	const classes = $derived(
		mergeClassNames(
			...TABLE_CLASSES.table,
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const captionClasses = $derived(mergeClassNames(...TABLE_CLASSES.caption));
	const restProps = $derived(ObjectManagerTable.getTableRestProps(props));

	return {
		get classes() {
			return classes;
		},
		get captionClasses() {
			return captionClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createTableState;
