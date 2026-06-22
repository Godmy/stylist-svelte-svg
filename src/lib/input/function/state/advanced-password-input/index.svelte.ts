import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotAdvancedPasswordInput as IAdvancedPasswordInputProps } from '$stylist/input/interface/slot/advanced-password-input';

export const createAdvancedPasswordInputState = (
	props: IAdvancedPasswordInputProps & HTMLAttributes<HTMLInputElement> & SlotInteraction
) => {
	let showPassword = $state(false);
	let inputValue = $state(props.value ?? '');

	$effect(() => {
		inputValue = props.value ?? '';
	});

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		inputValue = target.value;
		props.onInput?.(inputValue);
		props.onValueInput?.(inputValue);
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		inputValue = target.value;
		props.onChange?.(inputValue);
		props.onValueChange?.(inputValue);
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	function getPasswordStrength() {
		if (!inputValue) return 0;

		let strength = 0;
		if (inputValue.length >= 8) strength += 1;
		if (/[A-Z]/.test(inputValue)) strength += 1;
		if (/[0-9]/.test(inputValue)) strength += 1;
		if (/[^A-Za-z0-9]/.test(inputValue)) strength += 1;

		return Math.min(strength, 4);
	}

	function getStrengthLabel() {
		switch (getPasswordStrength()) {
			case 0:
				return 'Empty';
			case 1:
				return 'Very Weak';
			case 2:
				return 'Weak';
			case 3:
				return 'Medium';
			case 4:
				return 'Strong';
			default:
				return 'Unknown';
		}
	}

	const containerClass = $derived(['adv-password-input', props.class].filter(Boolean).join(' '));
	const inputWrapperClass = $derived('adv-password-input__wrapper');
	const inputClass = $derived(
		[
			'adv-password-input__input',
			props.disabled ? 'adv-password-input__input--disabled' : '',
			props.inputClass ?? ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const buttonClass = $derived(
		[
			'adv-password-input__toggle',
			props.disabled ? 'adv-password-input__toggle--hidden' : '',
			props.buttonClass ?? ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const strengthMeterContainerClass = $derived('adv-password-input__strength');
	const strengthLabelsContainerClass = $derived('adv-password-input__strength-header');
	const strengthLabelClass = $derived('adv-password-input__strength-label');
	const strengthValueClass = $derived(
		`adv-password-input__strength-value adv-password-input__strength-value--${getPasswordStrength()}`
	);
	const strengthMeterBgClass = $derived('adv-password-input__strength-track');
	const strengthMeterFillClass = $derived(
		`adv-password-input__strength-fill adv-password-input__strength-fill--${getPasswordStrength()}`
	);

	return {
		get value() {
			return inputValue;
		},
		set value(value: string) {
			inputValue = value;
		},
		get showPassword() {
			return showPassword;
		},
		get type() {
			return showPassword ? 'text' : 'password';
		},
		get placeholder() {
			return props.placeholder ?? 'Enter password';
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get readonly() {
			return props.readonly ?? false;
		},
		get showStrengthMeter() {
			return props.showStrengthMeter ?? false;
		},
		get strength() {
			return getPasswordStrength();
		},
		get strengthLabel() {
			return getStrengthLabel();
		},
		get containerClass() {
			return containerClass;
		},
		get inputWrapperClass() {
			return inputWrapperClass;
		},
		get inputClass() {
			return inputClass;
		},
		get buttonClass() {
			return buttonClass;
		},
		get strengthMeterContainerClass() {
			return strengthMeterContainerClass;
		},
		get strengthLabelsContainerClass() {
			return strengthLabelsContainerClass;
		},
		get strengthLabelClass() {
			return strengthLabelClass;
		},
		get strengthValueClass() {
			return strengthValueClass;
		},
		get strengthMeterBgClass() {
			return strengthMeterBgClass;
		},
		get strengthMeterFillClass() {
			return strengthMeterFillClass;
		},
		handleInput,
		handleChange,
		togglePasswordVisibility
	};
};
