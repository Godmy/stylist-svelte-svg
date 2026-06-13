import type { ToggleWithDescriptionProps } from '$stylist/control/type/struct/toggle-with-description-props';

export function createToggleWithDescriptionState(props: ToggleWithDescriptionProps) {
	let isChecked = $state(props.checked ?? false);

	$effect(() => {
		if (isChecked !== (props.checked ?? false)) {
			isChecked = props.checked ?? false;
		}
	});

	function handleToggle() {
		if (props.disabled) return;

		isChecked = !isChecked;
		props.onValueInput?.(isChecked);
		props.onValueChange?.(isChecked);
		props.onInput?.(isChecked);
		props.onChange?.(isChecked);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleToggle();
		}
	}

	return {
		get isChecked() {
			return isChecked;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get label() {
			return props.label ?? '';
		},
		get description() {
			return props.description ?? '';
		},
		handleToggle,
		handleKeyDown
	};
}

export default createToggleWithDescriptionState;
