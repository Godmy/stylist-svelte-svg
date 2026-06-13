import { ObjectManagerStatsCard } from '$stylist/information/class/object-manager/stats-card';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { StatsCardStateProps } from '$stylist/information/interface/recipe/stats-card-stats-card-state-props';

export function createStatsCardState(props: StatsCardStateProps) {
	// Props with defaults
	const label = props.label;
	const value = props.value;
	const trend = props.trend ?? 'neutral';
	const trendValue = props.trendValue;
	const description = props.description;
	const icon = props.icon;
	const propClassName = props.class ?? '';

	// Classes
	const trendClasses = $derived(ObjectManagerStatsCard.resolveTrendClass(trend));
	const trendIconName = $derived(ObjectManagerStatsCard.resolveTrendIconName(trend));
	const containerClasses = $derived(
		mergeClassNames(
			'rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-5 shadow-sm transition hover:shadow',
			propClassName
		)
	);
	const headerClasses = $derived('flex items-start justify-between');
	const labelClasses = $derived('text-sm font-medium text-[var(--color-text-secondary)]');
	const valueClasses = $derived('mt-2 text-2xl font-semibold text-[var(--color-text-primary)]');
	const iconWrapperClasses = $derived(
		'rounded-full bg-[var(--color-primary-50)] p-3 text-[var(--color-primary-500)]'
	);
	const footerClasses = $derived('mt-3 flex items-center gap-2 text-sm');
	const trendContainerClasses = $derived(
		mergeClassNames('inline-flex items-center gap-1 font-medium', trendClasses)
	);
	const trendIconClasses = $derived('h-4 w-4');
	const descriptionClasses = $derived('text-[var(--color-text-secondary)]');

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			value: _value,
			trend: _trend,
			trendValue: _trendValue,
			description: _description,
			icon: _icon,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() {
			return label;
		},
		get value() {
			return value;
		},
		get trend() {
			return trend;
		},
		get trendValue() {
			return trendValue;
		},
		get description() {
			return description;
		},
		get icon() {
			return icon;
		},
		get trendClasses() {
			return trendClasses;
		},
		get trendIconName() {
			return trendIconName;
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
		get iconWrapperClasses() {
			return iconWrapperClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get trendContainerClasses() {
			return trendContainerClasses;
		},
		get trendIconClasses() {
			return trendIconClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStatsCardState;
