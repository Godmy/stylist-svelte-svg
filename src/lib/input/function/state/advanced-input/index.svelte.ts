import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import type { InputStateOptions } from '$stylist/layout/type/struct/component-state-input-state-options';

export function createAdvancedInputState(props: InputStateOptions) {
	const inputState = createBaseInputState(INPUT_FIELD_PRESET, props);
	const containerClass = $derived(
		['advanced-input', String(props.class ?? '')].filter(Boolean).join(' ')
	);
	const labelClass = $derived(
		['advanced-input__label', inputState.isDisabled ? 'advanced-input__label--disabled' : '']
			.filter(Boolean)
			.join(' ')
	);

	return {
		...inputState,
		get containerClass() {
			return containerClass;
		},
		get labelClass() {
			return labelClass;
		},
		get inputClass() {
			return inputState.classes;
		}
	};
}

export default createAdvancedInputState;
