import type { RecipeAdvancedToggleProps as RecipeAdvancedToggleProps } from '$stylist/control/interface/recipe/advanced-toggle-props';

export const createAdvancedToggleState = (props: RecipeAdvancedToggleProps) => {
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const label = $derived(props.label ?? '');
	let localChecked = $state(props.checked ?? false);

	$effect(() => {
		localChecked = props.checked ?? false;
	});

	return {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get checked() {
			return localChecked;
		},
		get label() {
			return label;
		},
		handleChange() {
			if (disabled) {
				return;
			}

			localChecked = !localChecked;
			props.onValueInput?.(localChecked);
			props.onValueChange?.(localChecked);
			props.onChange?.(localChecked);
		}
	};
};

export default createAdvancedToggleState;
