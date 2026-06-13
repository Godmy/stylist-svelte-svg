import type { RecipeFavicon } from '$stylist/media/interface/recipe/favicon';

export function createFaviconState(props: RecipeFavicon) {
	let error = $state(props.error ?? false);

	$effect(() => {
		error = props.error ?? false;
	});

	const size = $derived(props.size ?? 16);
	const url = $derived(props.url);
	const faviconUrl = $derived(`favicon__TODO favicon__TODO--${url}`);
	const baseClasses = $derived(`favicon__favicon-image favicon__favicon-image--${props.class}`);
	const sizeStyle = $derived(`favicon__TODO favicon__TODO--${size}`);

	// Define individual classes for different elements
	const imageClasses = $derived(baseClasses);
	const fallbackClasses = $derived(
		`favicon__favicon-fallback favicon__favicon-fallback--${baseClasses}`
	);

	const restProps = $derived.by(() => {
		const { error: _error, onError: _onError, content: _content, ...rest } = props;
		return rest;
	});

	function handleError() {
		error = true;
		props.onError?.();
	}

	return {
		get size() {
			return size;
		},
		get faviconUrl() {
			return faviconUrl;
		},
		get sizeStyle() {
			return sizeStyle;
		},
		get error() {
			return error;
		},
		get classes() {
			return {
				image: imageClasses,
				fallback: fallbackClasses
			};
		},
		get restProps() {
			return restProps;
		},
		handleError
	};
}
