import type { RecipeIdef0FunctionBox as Idef0FunctionBoxProps } from '$stylist/science/interface/recipe/idef0-function-box';

export function createIdef0FunctionBoxState(props: Idef0FunctionBoxProps) {
	const groupClasses = $derived(
		typeof props.class === 'string' ? `idef0-function-box ${props.class}` : 'idef0-function-box'
	);

	return {
		get groupClasses() {
			return groupClasses;
		},
		get rectClasses() {
			return 'idef0-function-box__rect';
		},
		get titleClasses() {
			return 'idef0-function-box__title';
		},
		get subtitleClasses() {
			return 'idef0-function-box__subtitle';
		}
	};
}

export default createIdef0FunctionBoxState;
