<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProgressBarWithLabel from './index.svelte';

	const colorOptions = ['blue', 'green', 'red', 'yellow', 'purple'] as const;

	type ProgressBarWithLabelStoryProps = {
		value: number;
		max: number;
		label: string;
		showPercentage: boolean;
		color: (typeof colorOptions)[number];
		height: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'number',
			defaultValue: 75,
			min: 0,
			max: 100
		},
		{
			name: 'max',
			type: 'number',
			defaultValue: 100,
			min: 1
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Upload Progress'
		},
		{
			name: 'showPercentage',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'color',
			type: 'select',
			defaultValue: 'blue',
			options: [...colorOptions]
		},
		{
			name: 'height',
			type: 'text',
			defaultValue: 'h-2'
		}
	];
</script>

<Story
	id="molecules-progress-bar-with-label"
	title="ProgressBarWithLabel"
	component={ProgressBarWithLabel}
	category="Molecules"
	description="A progress bar component with label."
	tags={['progress', 'bar', 'indicator']}
	{controls}
>
	{#snippet children(values: any)}
		{@const value = typeof values.value === 'number' ? values.value : 75}
		{@const max = typeof values.max === 'number' ? values.max : 100}
		{@const label = typeof values.label === 'string' ? values.label : 'Upload Progress'}
		{@const showPercentage =
			typeof values.showPercentage === 'boolean' ? values.showPercentage : true}
		{@const color =
			typeof values.color === 'string'
				? (values.color as ProgressBarWithLabelStoryProps['color'])
				: 'blue'}
		{@const height = typeof values.height === 'string' ? values.height : 'h-2'}
		<div class="_c1">
			<h2 class="_c2">ProgressBarWithLabel Story</h2>
			<ProgressBarWithLabel {value} {max} {label} {showPercentage} {color} {height} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
</style>
