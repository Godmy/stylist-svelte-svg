import type { LazyLoaderProps } from '$stylist/notification/type/struct/lazy-loader-props';

export function createLazyLoaderState(props: LazyLoaderProps) {
	const loading = $derived(props.loading ?? true);
	const text = $derived(props.text ?? 'Loading content...');
	const containerClasses = $derived(`c-lazy-loader ${props.class ?? ''}`.trim());

	return {
		get loading() {
			return loading;
		},
		get text() {
			return text;
		},
		get containerClasses() {
			return containerClasses;
		}
	};
}

export default createLazyLoaderState;
