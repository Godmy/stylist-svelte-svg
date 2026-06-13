import type { LoadingBoundaryProps } from '$stylist/notification/type/struct/loading-boundary-props';

export function createLoadingBoundaryState(props: LoadingBoundaryProps) {
	const loading = $derived(props.loading ?? false);
	const error = $derived(props.error ?? '');
	const containerClasses = $derived(`c-loading-boundary ${props.class ?? ''}`.trim());

	return {
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		get containerClasses() {
			return containerClasses;
		}
	};
}

export default createLoadingBoundaryState;
