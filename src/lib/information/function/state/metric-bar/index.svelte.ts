import { ObjectManagerMetricBar } from '$stylist/information/class/object-manager/metric-bar';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeMetricBar } from '$stylist/information/interface/recipe/metric-bar';

export function createMetricBarState(props: RecipeMetricBar) {
	const label = $derived(props.label ?? '');
	const percentage = $derived(ObjectManagerMetricBar.resolvePercentage(props));
	const valueLabel = $derived(ObjectManagerMetricBar.resolveValueLabel(props));
	const color = $derived(props.color ?? 'var(--color-primary-500)');
	const trackColor = $derived(props.trackColor ?? 'var(--color-neutral-200)');
	const containerClasses = $derived(
		mergeClassNames('flex flex-col gap-2', props.class == null ? '' : String(props.class))
	);
	const headerClasses = $derived('flex items-center justify-between gap-3');
	const labelClasses = $derived('text-sm font-medium text-[var(--color-text-primary)]');
	const valueClasses = $derived('text-sm tabular-nums text-[var(--color-text-secondary)]');
	const trackClasses = $derived(
		'h-2 overflow-hidden rounded-full bg-[var(--metric-bar-track-color,var(--color-neutral-200))]'
	);
	const fillClasses = $derived(
		'h-full rounded-full bg-[var(--metric-bar-color,var(--color-primary-500))] transition-[width] duration-300 ease-out'
	);
	const widthStyle = $derived(`width: ${percentage}%;`);
	const cssVariables = $derived(
		`--metric-bar-color: ${color}; --metric-bar-track-color: ${trackColor};`
	);
	const combinedStyle = $derived([props.style, cssVariables].filter(Boolean).join(' '));
	const restProps = $derived.by(() => {
		const {
			class: _class,
			style: _style,
			label: _label,
			value: _value,
			currentValue: _currentValue,
			targetValue: _targetValue,
			max: _max,
			percentage: _percentage,
			unit: _unit,
			valueLabel: _valueLabel,
			color: _color,
			trackColor: _trackColor,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() {
			return label;
		},
		get percentage() {
			return percentage;
		},
		get valueLabel() {
			return valueLabel;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get valueClasses() {
			return valueClasses;
		},
		get trackClasses() {
			return trackClasses;
		},
		get fillClasses() {
			return fillClasses;
		},
		get widthStyle() {
			return widthStyle;
		},
		get combinedStyle() {
			return combinedStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createMetricBarState;
