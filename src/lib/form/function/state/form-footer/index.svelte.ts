import { FormFooterStyleManager } from '$stylist/form/class/style-manager/form-footer';
import type { SlotFormFooter as FormFooterProps } from '$stylist/form/interface/slot/form-footer';

export function createFormFooterState(props: FormFooterProps) {
	const rootClass = $derived(FormFooterStyleManager.root(props.class ?? ''));
	const secondaryButtonClass = $derived(
		FormFooterStyleManager.secondaryButton(
			props.secondaryButtonDisabled ?? false,
			props.secondaryButtonClass ?? ''
		)
	);
	const primaryButtonClass = $derived(
		FormFooterStyleManager.primaryButton(
			props.primaryButtonDisabled ?? false,
			props.primaryButtonClass ?? ''
		)
	);

	return {
		get rootClass() {
			return rootClass;
		},
		get secondaryButtonClass() {
			return secondaryButtonClass;
		},
		get primaryButtonClass() {
			return primaryButtonClass;
		}
	};
}

export default createFormFooterState;
