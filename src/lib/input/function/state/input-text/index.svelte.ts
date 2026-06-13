import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import type { InputTextStateOptions } from '$stylist/input/type/struct/input-text-state-options';

export function createInputTextState(props: InputTextStateOptions) {
	const inputState = createBaseInputState(INPUT_FIELD_PRESET, props);
	const hasError = $derived(!!props.error);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));

	return {
		...inputState,
		get hasError() {
			return hasError;
		},
		get errorId() {
			return errorId;
		},
		get labelId() {
			return labelId;
		},
		get containerClasses() {
			return 'input-field-container';
		},
		get labelClasses() {
			return 'input-field-label';
		},
		get helperTextClasses() {
			return 'input-field-helper-text';
		},
		get errorTextClasses() {
			return 'input-field-error-text';
		},
		get requiredIndicatorClasses() {
			return 'input-field-required';
		},
		get showHelper() {
			return showHelper;
		}
	};
}

export default createInputTextState;
