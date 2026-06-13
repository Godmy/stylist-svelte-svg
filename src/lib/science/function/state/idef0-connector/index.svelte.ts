import type { RecipeIdef0Connector as Idef0ConnectorProps } from '$stylist/science/interface/recipe/idef0-connector';

export function createIdef0ConnectorState(props: Idef0ConnectorProps) {
	const groupClasses = $derived(
		typeof props.class === 'string' ? `idef0-connector ${props.class}` : 'idef0-connector'
	);

	return {
		get groupClasses() {
			return groupClasses;
		},
		get lineClasses() {
			return 'idef0-connector__line';
		},
		get labelClasses() {
			return 'idef0-connector__label';
		}
	};
}

export default createIdef0ConnectorState;
