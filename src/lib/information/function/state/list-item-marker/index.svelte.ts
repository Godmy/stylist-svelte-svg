import type { RecipeListItemMarker } from '$stylist/information/interface/recipe/list-item-marker';

export function createListItemMarkerState(props: RecipeListItemMarker) {
	const type = $derived(props.type ?? 'bullet');
	const value = $derived(props.value ?? '');
	const color = $derived(props.color ?? 'gray');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(
		['list-item-marker', `list-item-marker--${color}`, `list-item-marker--${size}`, className]
			.filter(Boolean)
			.join(' ')
	);
	const bulletClasses = $derived(`list-item-marker__bullet list-item-marker__bullet--${size}`);

	return {
		get type() {
			return type;
		},
		get value() {
			return value;
		},
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get bulletClasses() {
			return bulletClasses;
		}
	};
}

export default createListItemMarkerState;
