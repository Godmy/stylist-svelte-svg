import type { RecipeErrorBoundary } from '$stylist/notification/interface/recipe/error-boundary';

export function createErrorBoundaryState(props: RecipeErrorBoundary) {
	const themedClasses = $derived(`error-boundary ${props.class ?? ''}`.trim());
	const contentClasses = $derived(`error-boundary__content ${props.contentClass ?? ''}`.trim());
	const headerClasses = $derived(`error-boundary__header ${props.headerClass ?? ''}`.trim());
	const bodyClasses = $derived(`error-boundary__body ${props.bodyClass ?? ''}`.trim());
	const footerClasses = $derived(`error-boundary__footer ${props.footerClass ?? ''}`.trim());
	const detailsClasses = $derived('error-boundary__details');
	const detailsTextClasses = $derived('error-boundary__details-pre');
	const iconClasses = $derived('error-boundary__icon');
	const summaryClasses = $derived('error-boundary__summary');

	function handleReset(reset: () => void) {
		reset();
		props.onReset?.();
	}

	return {
		get themedClasses() {
			return themedClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get bodyClasses() {
			return bodyClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get detailsClasses() {
			return detailsClasses;
		},
		get detailsTextClasses() {
			return detailsTextClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get summaryClasses() {
			return summaryClasses;
		},
		handleReset
	};
}
