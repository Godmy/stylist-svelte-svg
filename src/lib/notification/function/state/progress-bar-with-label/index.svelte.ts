import type { ProgressBarWithLabelProps } from '$stylist/notification/type/struct/progress-bar-with-label-props';

export function createProgressBarWithLabelState(props: ProgressBarWithLabelProps) {
	const value = $derived(props.value ?? 0);
	const max = $derived(props.max ?? 100);
	const label = $derived(props.label ?? '');
	const showPercentage = $derived(props.showPercentage ?? true);
	const color = $derived(props.color ?? 'blue');

	const percentage = $derived(Math.round((value / max) * 100));

	const containerClasses = $derived(`pbwl ${props.class ?? ''}`.trim());
	const labelWrapperClasses = $derived('pbwl__header');
	const labelClasses = $derived('pbwl__label');
	const trackClasses = $derived('pbwl__track');
	const fillClasses = $derived(`pbwl__fill pbwl__fill--${color}`);

	return {
		get value() {
			return value;
		},
		get max() {
			return max;
		},
		get label() {
			return label;
		},
		get showPercentage() {
			return showPercentage;
		},
		get percentage() {
			return percentage;
		},
		get containerClasses() {
			return containerClasses;
		},
		get labelWrapperClasses() {
			return labelWrapperClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get trackClasses() {
			return trackClasses;
		},
		get fillClasses() {
			return fillClasses;
		}
	};
}

export default createProgressBarWithLabelState;
