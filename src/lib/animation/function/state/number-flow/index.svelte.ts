import type { NumberFlowRecipe as NumberFlowProps } from '$stylist/animation/interface/recipe/number-flow';
import { AnimationStyleManager } from '$stylist/animation/class/style-manager/animation';

export function createNumberFlowState(props: NumberFlowProps) {
	const value = $derived(props.value ?? 0);
	const locales = $derived(props.locales ?? 'en-US');
	const format = $derived(props.format);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const containerClass = $derived(
		AnimationStyleManager.getNumberFlowContainerClasses(
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const classes = $derived(AnimationStyleManager.getNumberFlowClasses(containerClass));
	const formattedValue = $derived(
		AnimationStyleManager.formatNumberFlow(
			value,
			Array.isArray(locales)
				? locales.filter((locale): locale is string => typeof locale === 'string')
				: typeof locales === 'string'
					? locales
					: undefined,
			format ?? undefined
		)
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

export default createNumberFlowState;
