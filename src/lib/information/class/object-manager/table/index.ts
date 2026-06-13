import type { RecipeTable as RecipeTable } from '$stylist/information/interface/recipe/table';
import type { RecipeTableSection as RecipeTableSection } from '$stylist/information/interface/recipe/table-section';
import type { RecipeTableRow as RecipeTableRow } from '$stylist/information/interface/recipe/table-row';
import type { RecipeTableCell as RecipeTableCell } from '$stylist/information/interface/recipe/table-cell';

export class ObjectManagerTable {
	static getTableRestProps(props: RecipeTable) {
		const {
			class: _class,
			content: _content,
			caption: _caption,
			striped: _striped,
			bordered: _bordered,
			hoverable: _hoverable,
			...rest
		} = props;

		return rest;
	}

	static getSectionRestProps(props: RecipeTableSection) {
		const { class: _class, content: _content, ...rest } = props;
		return rest;
	}

	static getRowRestProps(props: RecipeTableRow) {
		const { class: _class, content: _content, striped: _striped, active: _active, ...rest } = props;

		return rest;
	}

	static getCellRestProps(props: RecipeTableCell) {
		const { align: _align, class: _class, content: _content, ...rest } = props;
		return rest;
	}
}
