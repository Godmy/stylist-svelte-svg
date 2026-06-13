import type { RecipeToast } from '$stylist/notification/interface/recipe/toast';

export function createToastState(props: RecipeToast) {
	const type = $derived(props.type ?? 'info');
	let internalVisible = $state(props.visible ?? true);

	$effect(() => {
		internalVisible = props.visible ?? true;
	});

	$effect(() => {
		const duration = props.duration ?? 5000;
		if (internalVisible && duration > 0) {
			const timer = setTimeout(() => {
				internalVisible = false;
			}, duration);
			return () => clearTimeout(timer);
		}
	});

	function closeToast() {
		internalVisible = false;
	}

	const classes = $derived(
		`toast toast--${type} ${internalVisible ? 'toast--visible' : 'toast--hidden'} ${props.class ?? ''}`.trim()
	);

	return {
		get internalVisible() {
			return internalVisible;
		},
		get classes() {
			return classes;
		},
		closeToast
	};
}
