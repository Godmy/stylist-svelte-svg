import type { AnimatedProgressProps } from '$stylist/notification/type/struct/animated-progress-props';

export function createAnimatedProgressState(props: AnimatedProgressProps) {
	const percentage = $derived(
		Math.round(
			(((props.value ?? 0) - (props.min ?? 0)) / ((props.max ?? 100) - (props.min ?? 0))) * 100
		)
	);

	const containerClasses = $derived(`animated-progress ${props.class ?? ''}`);
	const labelClasses = $derived('animated-progress__label');
	const progressBarBgClasses = $derived('animated-progress__track');
	const progressFillClasses = $derived('animated-progress__fill');

	return {
		get percentage() {
			return percentage;
		},
		get containerClasses() {
			return containerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get progressBarBgClasses() {
			return progressBarBgClasses;
		},
		get progressFillClasses() {
			return progressFillClasses;
		}
	};
}

export default createAnimatedProgressState;
