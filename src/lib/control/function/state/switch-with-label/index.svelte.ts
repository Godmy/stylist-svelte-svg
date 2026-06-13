import type { RecipeSwitchWithLabel } from '$stylist/control/interface/recipe/switch-with-label';

export function createSwitchWithLabelState(props: RecipeSwitchWithLabel) {
	const disabled = $derived(props.disabled ?? false);
	const labelPosition = $derived(props.labelPosition ?? 'right');
	let checked = $state(props.checked ?? false);

	$effect(() => {
		checked = props.checked ?? false;
	});

	function handleToggle() {
		if (props.disabled) return;

		checked = !checked;
		props.onValueInput?.(checked);
		props.onValueChange?.(checked);
		props.onInput?.(checked);
		props.onChange?.(checked);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleToggle();
		}
	}

	return {
		get disabled() {
			return disabled;
		},
		get checked() {
			return checked;
		},
		get label() {
			return props.label ?? '';
		},
		get labelPosition() {
			return labelPosition;
		},
		handleToggle,
		handleKeyDown
	};
}
