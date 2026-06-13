import type { ResponseViewerProps } from '$stylist/notification/type/struct/response-viewer-props';

export function createResponseViewerState(props: ResponseViewerProps) {
	const title = $derived(props.title ?? 'Response');
	const response = $derived(props.response ?? '{}');
	const status = $derived(props.status ?? 'info');
	const containerClasses = $derived(`c-response-viewer ${props.class ?? ''}`.trim());
	const titleClasses = $derived('c-response-viewer__title');
	const statusClasses = $derived('c-response-viewer__status');
	const responsePreClasses = $derived('c-response-viewer__pre');

	return {
		get title() {
			return title;
		},
		get response() {
			return response;
		},
		get status() {
			return status;
		},
		get containerClasses() {
			return containerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get statusClasses() {
			return statusClasses;
		},
		get responsePreClasses() {
			return responsePreClasses;
		}
	};
}

export default createResponseViewerState;
