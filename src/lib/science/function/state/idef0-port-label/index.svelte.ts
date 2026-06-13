import type { RecipeIdef0PortLabel as Idef0PortLabelProps } from '$stylist/science/interface/recipe/idef0-port-label';

export function createIdef0PortLabelState(props: Idef0PortLabelProps) {
	const classes = $derived(
		typeof props.class === 'string' ? `idef0-port-label ${props.class}` : 'idef0-port-label'
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createIdef0PortLabelState;
