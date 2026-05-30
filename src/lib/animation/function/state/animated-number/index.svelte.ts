import type { AnimatedNumberRecipe as AnimatedNumberProps } from '$stylist/animation/interface/recipe/animated-number';
import { AnimationStyleManager } from '$stylist/animation/class/style-manager/animation';

export function createAnimatedNumberState(props: AnimatedNumberProps) {
	const value = $derived(props.value ?? 0);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const separator = $derived(props.separator ?? ',');
	const decimals = $derived(props.decimals ?? 0);
	const classes = $derived(
		AnimationStyleManager.getAnimatedNumberClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);

	const formattedValue = $derived(
		AnimationStyleManager.formatAnimated(value, {
			format: props.format ?? 'number',
			separator,
			decimals
		})
	);

	return {
		get value() {
			return value;
		},
		get prefix() {
			return prefix;
		},
		get suffix() {
			return suffix;
		},
		get formattedValue() {
			return formattedValue;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAnimatedNumberState;
