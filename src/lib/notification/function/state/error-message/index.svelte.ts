import type { SlotErrorMessage as RecipeErrorMessage } from '$stylist/notification/interface/slot/error-message-error-message';

export function createErrorMessageState(props: RecipeErrorMessage) {
	const error = props.error;
	const title = props.title ?? 'Error';
	const onRetry = props.onRetry;
	const showRetry = props.showRetry ?? true;

	let errorMessage = $state<string | null>(null);

	$effect(() => {
		if (error) {
			errorMessage =
				typeof error === 'string' ? error : error.message || 'An unknown error occurred';
		} else {
			errorMessage = null;
		}
	});

	const containerClasses = $derived(`error-message ${props.class ?? ''}`.trim());

	return {
		error,
		title,
		onRetry,
		showRetry,
		get errorMessage() {
			return errorMessage;
		},
		containerClasses,
		titleClasses: 'error-message__title',
		textClasses: 'error-message__text',
		buttonClasses: 'error-message__retry-btn',
		buttonContainerClasses: 'error-message__actions'
	};
}
